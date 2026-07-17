import {useEffect, useId, useRef, useState} from "react";
import {createPortal} from "react-dom";
import {useTranslation} from "react-i18next";
import {buildPortfolioContext} from "../../data/portfolioAssistant.ts";
import {askPortfolioAssistant} from "../../services/portfolioAssistant.ts";
import type {Props, ChatMessage} from './PortfolioChatModal.d'

const getFocusableElements = (container: HTMLElement) => (
    Array.from(container.querySelectorAll<HTMLElement>(
        'button:not([disabled]), textarea:not([disabled]), [href], [tabindex]:not([tabindex="-1"])'
    ))
);

const renderBoldText = (content: string) => {
    const parts = content.split(/(\*\*[^*\n]+?\*\*)/g);

    return parts.map((part, index) => (
        part.startsWith("**") && part.endsWith("**")
            ? <strong key={index}>{part.slice(2, -2)}</strong>
            : part
    ));
};

export default function PortfolioChatModal({isOpen, onClose}: Props) {
    const {t, i18n} = useTranslation();
    const dialogRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLTextAreaElement>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const [input, setInput] = useState("");
    const [isSending, setIsSending] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const titleId = useId();
    const descriptionId = useId();

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        const previouslyFocusedElement = document.activeElement as HTMLElement | null;
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
                return;
            }

            if (event.key !== "Tab" || !dialogRef.current) {
                return;
            }

            const focusableElements = getFocusableElements(dialogRef.current);
            const firstElement = focusableElements[0];
            const lastElement = focusableElements.at(-1);

            if (!firstElement || !lastElement) {
                return;
            }

            if (event.shiftKey && document.activeElement === firstElement) {
                event.preventDefault();
                lastElement.focus();
            } else if (!event.shiftKey && document.activeElement === lastElement) {
                event.preventDefault();
                firstElement.focus();
            }
        };

        document.body.style.overflow = "hidden";
        document.addEventListener("keydown", handleKeyDown);
        const focusTimeout = window.setTimeout(() => inputRef.current?.focus(), 80);

        return () => {
            document.body.style.overflow = "";
            document.removeEventListener("keydown", handleKeyDown);
            window.clearTimeout(focusTimeout);
            previouslyFocusedElement?.focus();
        };
    }, [isOpen, onClose]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({behavior: "smooth"});
    }, [messages, isSending]);

    if (!isOpen) {
        return null;
    }

    const submitQuestion = async (question: string) => {
        const trimmedQuestion = question.trim();

        if (!trimmedQuestion || isSending) {
            return;
        }

        const userMessage: ChatMessage = {
            id: Date.now(),
            role: "user",
            content: trimmedQuestion,
        };
        const conversation = [...messages, userMessage];

        setMessages(conversation);
        setInput("");
        setIsSending(true);

        try {
            const answer = await askPortfolioAssistant({
                context: buildPortfolioContext(t),
                language: i18n.resolvedLanguage || i18n.language,
                messages: conversation.map(({role, content}) => ({role, content})),
            });
            
            setMessages((currentMessages) => [
                ...currentMessages,
                {id: Date.now() + 1, role: "assistant", content: answer},
            ]);
        } catch {
            setMessages((currentMessages) => [
                ...currentMessages,
                {
                    id: Date.now() + 1,
                    role: "assistant",
                    content: t("chat.error"),
                },
            ]);
        } finally {
            setIsSending(false);
        }
    };

    const handleSubmit = () => {
        void submitQuestion(input);
    };

    const handleInputKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            handleSubmit();
        }
    };

    const suggestedQuestions = [
        t("chat.suggestions.projects"),
        t("chat.suggestions.skills"),
        t("chat.suggestions.contact"),
        t("chat.suggestions.technologies"),
    ];
    const isPersian = (i18n.resolvedLanguage || i18n.language).startsWith("fa");

    return createPortal(
        <div className="fixed inset-0 z-100 flex items-end justify-center p-0 sm:items-center sm:p-6">
            <button
                className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-[chat-fade-in_180ms_ease-out]"
                onClick={onClose}
                aria-label={t("chat.close")}
            />
            <div
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
                aria-describedby={descriptionId}
                className="relative flex h-[min(44rem,92dvh)] w-full max-w-2xl flex-col overflow-hidden border border-gray bg-background shadow-[0_24px_80px_rgba(0,0,0,0.5)] animate-[chat-modal-in_220ms_ease-out] sm:rounded-sm"
            >
                <div
                    className="flex items-start justify-between border-b border-gray bg-primary-light px-5 py-4 sm:px-6">
                    <div className="flex items-start gap-3">
                        <span className="mt-1.5 size-2 shrink-0 bg-primary shadow-[0_0_16px_#C778DD]"
                              aria-hidden="true"/>
                        <div>
                            <h2 id={titleId} className="text-base font-semibold">{t("chat.title")}</h2>
                            <p id={descriptionId} className="mt-1 text-xs leading-5 text-gray">{t("chat.subtitle")}</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="ml-4 inline-flex size-9 shrink-0 cursor-pointer items-center justify-center border border-transparent text-gray transition-colors hover:border-gray hover:text-white focus-visible:border-primary focus-visible:outline-none"
                        aria-label={t("chat.close")}
                    >
                        <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                             aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M6 18 18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>

                <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5 sm:px-6">
                    {messages.length === 0 ? (
                        <div className="flex h-full flex-col justify-center">
                            <p className="max-w-lg text-sm leading-7 text-gray">{t("chat.emptyState")}</p>
                            <div className="mt-6 grid gap-2 sm:grid-cols-2">
                                {suggestedQuestions.map((question) => (
                                    <button
                                        key={question}
                                        onClick={() => void submitQuestion(question)}
                                        className={`cursor-pointer border border-gray px-3 py-3 text-xs leading-5 text-gray transition-all hover:border-primary hover:bg-primary-light hover:text-white focus-visible:border-primary focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 ${
                                            isPersian ? "text-right" : "text-left"
                                        }`}
                                        disabled={isSending}
                                    >
                                        <span className="mr-1 text-primary">#</span>{question}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-4" dir="ltr">
                            {messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        dir={isPersian ? "rtl" : "ltr"}
                                        className={`max-w-[88%] whitespace-pre-wrap break-words border px-4 py-3 text-sm leading-6 ${
                                            message.role === "user"
                                                ? "border-primary bg-primary-light text-white"
                                                : "border-gray bg-black/10 text-gray"
                                        } ${isPersian ? "text-right" : "text-left"}`}
                                    >
                                        {message.role === "assistant"
                                            ? renderBoldText(message.content)
                                            : message.content}
                                    </div>
                                </div>
                            ))}
                            {isSending && (
                                <div className="flex justify-start" aria-live="polite">
                                    <div
                                        dir={isPersian ? "rtl" : "ltr"}
                                        className="flex items-center gap-2 border border-gray bg-black/10 px-4 py-3 text-sm text-gray">
                                        <span className="size-2 animate-pulse bg-primary"/>
                                        {t("chat.thinking")}
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef}/>
                        </div>
                    )}
                </div>

                <div className="border-t border-gray p-4 sm:p-5">
                    <div
                        className="flex items-center gap-3 border border-gray bg-black/10 p-2 focus-within:border-primary">
                        <textarea
                            ref={inputRef}
                            value={input}
                            onChange={(event) => setInput(event.target.value)}
                            onKeyDown={handleInputKeyDown}
                            placeholder={t("chat.placeholder")}
                            aria-label={t("chat.placeholder")}
                            className="min-h-12 flex-1 resize-none bg-transparent px-2 py-2 text-sm text-white placeholder:text-gray focus:outline-none disabled:cursor-not-allowed"
                            rows={1}
                            disabled={isSending}
                        />
                        <button
                            onClick={handleSubmit}
                            disabled={!input.trim() || isSending}
                            className="inline-flex h-10 cursor-pointer items-center gap-2 border border-primary bg-primary px-3 text-xs font-semibold text-background transition-colors hover:bg-white disabled:cursor-not-allowed disabled:border-gray disabled:bg-transparent disabled:text-gray focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        >
                            {isSending ? t("chat.sending") : t("chat.send")}
                            <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                 aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="m22 2-7 20-4-9-9-4Z"/>
                            </svg>
                        </button>
                    </div>
                    <p className="mt-2 text-[11px] text-gray">{t("chat.enterHint")}</p>
                </div>
            </div>
        </div>,
        document.body
    );
}

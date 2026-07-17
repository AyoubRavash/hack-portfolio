import {useState} from "react";
import {useTranslation} from "react-i18next";
import type {Props} from './MobileDrawer.d'
import NavItem from "../NavItem/NavItem.tsx";
import LangList from "../../LangList/LangList.tsx";

export default function MobileDrawer({isOpen, onClose, onLangChange, currentLang, onOpenChat}: Props) {
    const {t} = useTranslation();
    const [langOpen, setLangOpen] = useState(false);

    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
                    isOpen ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
                onClick={onClose}
            />

            {/* Drawer panel */}
            <div
                className={`fixed top-0 right-0 z-50 h-full w-64 bg-background shadow-xl transform transition-transform duration-300 ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {/* Close button */}
                <div className="flex justify-end mx-8 my-4">
                    <button onClick={onClose} className="text-gray" aria-label="Close menu">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                {/* Navigation links – stacked vertically */}
                <nav className="flex flex-col items-start gap-4 p-6">
                    <NavItem text={t('nav.home')} href=""/>
                    <NavItem text={t('nav.works')} href="works"/>
                    <NavItem text={t('nav.aboutMe')} href="about-me"/>
                    <NavItem text={t('nav.contacts')} href="contacts"/>
                    <button
                        onClick={onOpenChat}
                        className="flex w-full items-center gap-2 border border-primary px-3 py-3 text-left text-primary transition-colors hover:bg-primary hover:text-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        aria-haspopup="dialog"
                    >
                        <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z"/>
                        </svg>
                        {t("chat.askAi")}
                    </button>

                    {/* Language selector */}
                    <div className="w-full">
                        <button
                            onClick={() => setLangOpen(!langOpen)}
                            className="flex items-center justify-between w-full text-left"
                        >
                            <span className="text-gray">{currentLang.toUpperCase()}</span>
                            <svg
                                className={`w-4 h-4 text-gray transition-transform ${langOpen ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                            </svg>
                        </button>
                        {langOpen && (
                            <LangList onChange={onLangChange} isMobile={true}/>
                        )}
                    </div>
                </nav>
            </div>
        </>
    );
}

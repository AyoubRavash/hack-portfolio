export type Props = {
    isOpen: boolean;
    onClose: () => void;
};

export type ChatMessage = {
    id: number;
    role: "assistant" | "user";
    content: string;
};
export type Props = {
    isOpen: boolean;
    onClose: () => void;
    onLangChange: (lang: string) => void
    currentLang: string;
    onOpenChat: () => void;
}

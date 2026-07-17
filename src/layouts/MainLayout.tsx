import {useState} from "react";
import {Link, Outlet} from "react-router-dom";
import {useTranslation} from "react-i18next";
import MobileDrawer from "../components/UI/Nav/MobileDrawer/MobileDrawer.tsx";
import NavItem from "../components/UI/Nav/NavItem/NavItem.tsx";
import logoImg from '../assets/logo.png'
import LangList from "../components/UI/LangList/LangList.tsx";
import MainFooter from "../components/UI/MainFooter.tsx";
import PortfolioChatModal from "../components/PortfolioChat/PortfolioChatModal.tsx";

function MainLayout() {
    const {t, i18n} = useTranslation();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [chatOpen, setChatOpen] = useState(false);
    const [langDropdownOpen, setLangDropdownOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState(i18n.resolvedLanguage || i18n.language || 'en');

    const handleLangChange = (lang: string) => {
        i18n.changeLanguage(lang);
        setCurrentLang(lang);
        setLangDropdownOpen(false);
    };

    return (
        <div className={'w-full h-full'}>
            <div className="my-5 mx-auto w-10/12">
                <div className="flex items-center justify-between mb-20">
                    <div className={'flex items-center gap-2'}>
                        <img src={logoImg} alt={t('common.logoAlt')}/>
                        <Link to=".." className="uppercase font-semibold text-nowrap">
                            {t('common.name')}
                        </Link>
                    </div>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex flex-row items-center justify-center gap-3.5">
                        <NavItem text={t('nav.home')} href=""/>
                        <NavItem text={t('nav.works')} href="works"/>
                        <NavItem text={t('nav.aboutMe')} href="about-me"/>
                        <NavItem text={t('nav.contacts')} href="contacts"/>
                        <button
                            onClick={() => setChatOpen(true)}
                            className="inline-flex cursor-pointer items-center gap-2 border border-primary px-3 py-2 text-xs text-primary transition-colors hover:bg-primary hover:text-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                            aria-haspopup="dialog"
                        >
                            <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z"/>
                            </svg>
                            {t("chat.askAi")}
                        </button>

                        {/* Language dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                                className="flex items-center gap-1 px-3 py-2 transition-colors cursor-pointer text-gray hover:text-white"
                            >
                                <span>{currentLang.toUpperCase()}</span>
                                <svg
                                    className={`w-4 h-4 transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M19 9l-7 7-7-7"/>
                                </svg>
                            </button>

                            {langDropdownOpen && (
                                <LangList onChange={handleLangChange} isMobile={false}/>
                            )}
                        </div>
                    </nav>

                    {/* Hamburger (mobile only) */}
                    <button
                        onClick={() => setDrawerOpen(true)}
                        className="md:hidden flex flex-col gap-1 p-2"
                        aria-label="Open menu"
                    >
                        <span className="block w-6 h-0.5 bg-gray"/>
                        <span className="block w-6 h-0.5 bg-gray"/>
                        <span className="block w-6 h-0.5 bg-gray"/>
                    </button>
                </div>

                <Outlet/>

                {/* Mobile drawer */}
                <MobileDrawer
                    isOpen={drawerOpen}
                    onClose={() => setDrawerOpen(false)}
                    onLangChange={handleLangChange}
                    currentLang={currentLang}
                    onOpenChat={() => {
                        setDrawerOpen(false);
                        setChatOpen(true);
                    }}
                />
                <PortfolioChatModal isOpen={chatOpen} onClose={() => setChatOpen(false)}/>
            </div>
            <div className={'w-full h-px bg-gray mt-30'}></div>
            <MainFooter/>
        </div>
    );
}

export default MainLayout;

import {useState} from "react";
import {Link, Outlet} from "react-router-dom";
import MobileDrawer from "../components/UI/Nav/MobileDrawer/MobileDrawer.tsx";
import NavItem from "../components/UI/Nav/NavItem/NavItem.tsx";
import logoImg from '../assets/logo.png'
import LangList from "../components/UI/LangList/LangList.tsx";
import MainFooter from "../components/UI/MainFooter.tsx";

function MainLayout() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [langDropdownOpen, setLangDropdownOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState(() => {
        return localStorage.getItem('lang') || 'en';
    });

    const handleLangChange = (lang: string) => {
        console.log('Language changed to:', lang);
        localStorage.setItem('lang', lang);
        setCurrentLang(lang);
        setLangDropdownOpen(false);
        window.location.reload();
    };

    return (
        <div className={'w-full h-full'}>
            <div className="my-5 mx-auto w-10/12">
                <div className="flex items-center justify-between mb-20">
                    <div className={'flex items-center gap-2'}>
                        <img src={logoImg} alt={'logo'}/>
                        <Link to=".." className="uppercase font-semibold text-nowrap">
                            Ayoub Ravash
                        </Link>
                    </div>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex flex-row items-center justify-center gap-3.5">
                        <NavItem text="home" href=""/>
                        <NavItem text="works" href="works"/>
                        <NavItem text="about-me" href="about-me"/>
                        <NavItem text="contacts" href="contacts"/>

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
                />
            </div>
            <div className={'w-full h-px bg-gray mt-30'}></div>
            <MainFooter/>
        </div>
    );
}

export default MainLayout;

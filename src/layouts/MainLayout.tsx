import {useState} from "react";
import {Link, Outlet} from "react-router-dom";
import MobileDrawer from "../components/UI/Nav/MobileDrawer/MobileDrawer.tsx";
import NavItem from "../components/UI/Nav/NavItem/NavItem.tsx";
import logoImg from '../assets/logo.png'

function MainLayout() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <div className="my-5 mx-auto w-10/12">
            <div className="flex items-center justify-between mb-20">
                <div className={'flex items-center gap-2'}>
                    <img src={logoImg} alt={'logo'}/>
                    <Link to=".." className="uppercase">
                        Ayoub Ravash
                    </Link>
                </div>

                {/* Desktop nav */}
                <nav className="hidden md:flex flex-row items-center justify-center gap-3.5">
                    <NavItem text="home" href=""/>
                    <NavItem text="works" href="works"/>
                    <NavItem text="about-me" href="about-me"/>
                    <NavItem text="contacts" href="contacts"/>
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
            <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)}/>
        </div>
    );
}

export default MainLayout;
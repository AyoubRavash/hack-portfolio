import headerImg from '../assets/header-image.png'
import purpleLogoImg from '../assets/purple-logo.png'
import HighSpaceDotsImg from '../assets/high-space-dots.png'
import MainButton from "./UI/MainButton/MainButton.tsx";

function Header() {
    return (
        <header className={'flex flex-col lg:flex-row items-center justify-between gap-2'}>
            <div className={'flex flex-col gap-4 justify-center items-start'}>
                <h1 className={'text-4xl'}>
                    Ayoub is a <span className={'text-primary'}>software engineer</span> and{' '}
                    <span className={'text-primary'}>web <span
                        className={'text-nowrap'}>full-stack</span> developer</span>
                </h1>
                <p className={'text-gray'}>
                    He builds reliable and scalable systems and develops scripts and bots
                </p>
                <MainButton text={'Contact me!!'} canHide={true}/>
            </div>
            <div className={'relative'}>
                <img src={purpleLogoImg} alt={'header logo image'} className={'absolute -z-1 top-15 -left-4'}/>
                <img src={HighSpaceDotsImg} alt={'Dots image'}
                     className={'absolute bottom-15 lg:bottom-20 xl:bottom-15 right-4'}/>
                <img src={headerImg} alt={'header image'}/>
                <div className={'border border-gray py-1 px-2 flex items-center gap-2'}>
                    <div className={'size-4 bg-primary'}></div>
                    <p className={'text-gray'}>Currently working on <span className={'text-white'}>Portfolio</span></p>
                </div>
            </div>
        </header>
    )
}

export default Header
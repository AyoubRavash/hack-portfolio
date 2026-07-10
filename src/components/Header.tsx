import headerImg from '../assets/header-image.png'
import purpleLogoImg from '../assets/purple-logo.png'
import HighSpaceDotsImg from '../assets/high-space-dots.png'
import MainButton from "./UI/MainButton/MainButton.tsx";
import {Trans, useTranslation} from "react-i18next";

function Header() {
    const {t} = useTranslation();

    return (
        <header className={'flex flex-col lg:flex-row items-center justify-between gap-2'}>
            <div className={'flex flex-col gap-4 justify-center items-start'}>
                <h1 className={'text-4xl'}>
                    <Trans
                        i18nKey={'header.title'}
                        components={{
                            primary: <span className={'text-primary'}/>,
                            nowrap: <span className={'text-nowrap'}/>,
                        }}
                    />
                </h1>
                <p className={'text-gray'}>
                    {t('header.description')}
                </p>
                <MainButton text={t('actions.contactMe')} canHide={true} href={'contacts'}/>
            </div>
            <div className={'relative'}>
                <img src={purpleLogoImg} alt={t('header.purpleLogoAlt')} className={'absolute -z-1 top-15 -left-4'}/>
                <img src={HighSpaceDotsImg} alt={t('common.dotsAlt')}
                     className={'absolute bottom-15 lg:bottom-20 xl:bottom-15 right-4'}/>
                <img src={headerImg} alt={t('header.headerImageAlt')}/>
                <div className={'border border-gray py-1 px-2 flex items-center gap-2'}>
                    <div className={'size-4 bg-primary'}></div>
                    <p className={'text-gray'}>{t('header.statusPrefix')} <span
                        className={'text-white'}>{t('header.statusProject')}</span></p>
                </div>
            </div>
        </header>
    )
}

export default Header

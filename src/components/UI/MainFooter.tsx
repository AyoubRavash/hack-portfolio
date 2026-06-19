import githubLogoImg from '../../assets/icons/github.png'
import linkedInLogoImg from '../../assets/icons/linkedin.png'
import telegramLogoImg from '../../assets/icons/telegram.png'
import logoImg from '../../assets/logo.png'
import {Link} from "react-router-dom";

export default function MainFooter() {
    return <>
        <div className={'flex items-center justify-center sm:justify-between mx-auto w-10/12 my-10'}>
            <div className={'flex flex-col items-start justify-center gap-4'}>
                <div className={'flex items-center gap-4'}>
                    <div className={'flex items-center gap-2'}>
                        <img src={logoImg} alt={'logo'}/>
                        <Link to=".." className="uppercase font-semibold text-nowrap">
                            Ayoub Ravash
                        </Link>
                    </div>
                    <Link to={'mailto:ayoubravash@gmail.com'}
                          className={'text-gray text-xs sm:text-sm'}>ayoubravash@gmail.com</Link>
                </div>
                <p className={'text-sm'}>Software engineer and full-stack developer</p>
            </div>
            <div className={'hidden sm:flex flex-col items-center justify-center gap-4'}>
                <p className={'text-xl'}>Media</p>
                <div className={'flex gap-4 items-center'}>
                    <Link to={'https://github.com/AyoubRavash'}>
                        <img src={githubLogoImg} alt={'Github'} className={'size-6'}/>
                    </Link>
                    <Link to={'https://www.linkedin.com/in/ayoub-ravash-41752631a/'}>
                        <img src={linkedInLogoImg} alt={'LinkedIn'} className={'size-6'}/>
                    </Link>
                    <Link to={'https://Telegram.me/AyoubRavash'}>
                        <img src={telegramLogoImg} alt={'Telegram'} className={'size-6'}/>
                    </Link>
                </div>
            </div>
        </div>
        <p className={'text-gray mb-5 w-full text-center text-sm'}>© Copyright 2026. Made by Ayoub</p>
    </>
}
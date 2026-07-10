import type {Props} from './AboutMe.d'
import MainButton from "../UI/MainButton/MainButton.tsx";
import hacker2Img from '../../assets/hacker-image-2.png'
import spaceDotsImg from '../../assets/high-space-dots.png'
import {useTranslation} from "react-i18next";

export default function AboutMe({hasMore}: Props) {
    const {t} = useTranslation();

    return <div className={'w-full flex justify-between items-start gap-4'}>
        <div className={'w-full md:w-1/2'}>
            <p className="whitespace-pre-line text-gray mb-10">
                {t('aboutMe.text')}
            </p>
            {hasMore && (<MainButton text={t('actions.readMore')} canHide={false} href={'about-me'}/>)}
        </div>
        <div className={'relative hidden md:block'}>
            <img src={spaceDotsImg} alt={t('common.dotsAlt')} className={'absolute top-15'}/>
            <img src={hacker2Img} alt={t('aboutMe.hackerImageAlt')}/>
            <div className={'bg-primary h-px'}></div>
            <div className={'bg-primary h-p'}></div>
            <img src={spaceDotsImg} alt={t('common.dotsAlt')} className={'absolute bottom-1/5 right-5'}/>
        </div>
    </div>
}

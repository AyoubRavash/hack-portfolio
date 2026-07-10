import ContactsLink from "./ContactsLink/ContactsLink.tsx";
import telegramIconImg from '../../assets/icons/telegram.png'
import linkedinIconImg from '../../assets/icons/linkedin.png'
import gmailIconImg from '../../assets/icons/gmail.png'
import githubIconImg from '../../assets/icons/github.png'
import {useTranslation} from "react-i18next";

export default function Contacts() {
    const {t} = useTranslation();

    return <div className={'flex flex-col sm:flex-row items-start justify-between gap-8 w-full'}>
        <p className={'w-full sm:w-1/2 text-gray'}>{t('contacts.description')}</p>
        <div className={'border border-gray p-4 flex flex-col items-start justify-center gap-4 self-center'}>
            <p>{t('contacts.title')}</p>
            <ContactsLink href={'https://github.com/AyoubRavash'} text={t('common.github')} icon={githubIconImg}/>
            <ContactsLink href={'https://www.linkedin.com/in/ayoub-ravash-41752631a/'} text={t('common.linkedin')}
                          icon={linkedinIconImg}/>
            <ContactsLink href={'https://Telegram.me/AyoubRavash'} text={t('common.telegram')} icon={telegramIconImg}/>
            <ContactsLink href={'mailto:ayoubravash@gmail.com'} text={t('common.gmail')} icon={gmailIconImg}/>
        </div>
    </div>
}

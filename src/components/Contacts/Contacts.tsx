import ContactsLink from "./ContactsLink/ContactsLink.tsx";
import telegramIconImg from '../../assets/icons/telegram.png'
import linkedinIconImg from '../../assets/icons/linkedin.png'
import gmailIconImg from '../../assets/icons/gmail.png'
import githubIconImg from '../../assets/icons/github.png'

export default function Contacts() {
    return <div className={'flex flex-col sm:flex-row items-start justify-between gap-8 w-full'}>
        <p className={'w-full sm:w-1/2 text-gray'}>I’m interested in freelance and company roles opportunities. However,
            if you
            have other
            request or question,
            don’t hesitate to
            contact me.</p>
        <div className={'border border-gray p-4 flex flex-col items-start justify-center gap-4 self-center'}>
            <p>Contact me here</p>
            <ContactsLink href={'https://github.com/AyoubRavash'} text={'Github'} icon={githubIconImg}/>
            <ContactsLink href={'https://www.linkedin.com/in/ayoub-ravash-41752631a/'} text={'LinkedIn'}
                          icon={linkedinIconImg}/>
            <ContactsLink href={'https://Telegram.me/AyoubRavash'} text={'Telegram'} icon={telegramIconImg}/>
            <ContactsLink href={'mailto:ayoubravash@gmail.com'} text={'Gmail'} icon={gmailIconImg}/>
        </div>
    </div>
}
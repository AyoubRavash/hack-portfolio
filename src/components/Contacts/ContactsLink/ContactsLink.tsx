import type {Props} from './ContactsLink.d'

export default function ContactsLink({href, text, icon}: Props) {
    return <a href={href} target={'_blank'}
              className={'text-gray flex items-center justify-center gap-2 hover:text-white'}>
        <img src={icon} alt={text} className={'size-6'}/>
        <span>{text}</span>
    </a>
}
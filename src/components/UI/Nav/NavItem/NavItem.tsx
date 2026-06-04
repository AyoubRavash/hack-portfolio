import type {Props} from './NavItem.d'
import {NavLink} from "react-router-dom";

export default function NavItem({text, href}: Props) {
    return <NavLink to={href}
                    className={({isActive}) => `${!isActive ? 'text-gray' : undefined} hover:text-white`}><span
        className={'text-primary'}>#</span>{text}</NavLink>
}
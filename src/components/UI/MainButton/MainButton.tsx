import type {Props} from './MainButton.d'
import {Link} from "react-router-dom";

export default function MainButton({text, canHide, href}: Props) {
    return <Link to={href}
                 className={`${canHide && 'hidden lg:block'} border-2 border-primary pt-2 pb-2 pr-4 pl-4 cursor-pointer hover:bg-primary-light transition-all duration-100`}>
        {text}
    </Link>
}
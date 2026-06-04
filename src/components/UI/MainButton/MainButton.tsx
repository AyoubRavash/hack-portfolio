import type {Props} from './MainButton.d'

export default function MainButton({text, canHide}: Props) {
    return <button
        className={`${canHide && 'hidden lg:block'} border-2 border-primary pt-2 pb-2 pr-4 pl-4 cursor-pointer hover:bg-primary-light transition-all duration-100`}>
        {text}
    </button>
}
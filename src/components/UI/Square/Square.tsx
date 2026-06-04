import type {Props} from './Square.d'

export default function Square({styles, size}: Props) {
    return <div className={`hidden md:block border absolute border-gray size-${size} ${styles}`}></div>
}
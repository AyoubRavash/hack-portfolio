import type {Props} from '../Square'

export default function LargeSquare({styles}: Props) {
    return <div className={`hidden md:block border border-gray size-20 absolute ${styles}`}></div>
}
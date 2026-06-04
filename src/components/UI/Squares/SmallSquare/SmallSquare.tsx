import type {Props} from '../Square'

export default function SmallSquare({styles}: Props) {
    return <div className={`hidden md:block border border-gray size-16 absolute ${styles}`}></div>
}
import type {Props} from './SectionDivider.d'
import {Link} from "react-router-dom";

export default function SectionDivider({title, hasAll, href}: Props) {
    const isAll = hasAll && href

    return <div className={'flex items-center justify-between w-full my-2'}>
        <div className={'flex items-center w-full gap-4'}>
            <h2 className={'text-2xl'}><span className={'text-primary'}>#</span>{title}</h2>
            <div className={`h-px ${isAll ? 'w-2/10' : 'w-1/2'} md:w-5/10 bg-primary`}></div>
        </div>
        {isAll && <Link to={href} className={'text-nowrap'}>{'View all ~~>'}</Link>}
    </div>
}
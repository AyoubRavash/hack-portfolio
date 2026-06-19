import type {Props} from './LangList.d'
import LangItem from "./LangItem/LangItem.tsx";

export default function LangList({onChange, isMobile}: Props) {
    const baseClasses = isMobile
        ? 'pl-4 flex flex-col gap-2 mt-2'
        : 'absolute top-full mt-1 right-0 bg-background shadow-lg rounded-md py-1 min-w-25 z-50';

    return <ul className={baseClasses}>
        <LangItem name={'EN'} code={'en'} onChange={onChange}/>
        <LangItem name={'FA'} code={'fa'} onChange={onChange}/>
    </ul>
}

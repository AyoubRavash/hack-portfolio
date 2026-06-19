import type {Props} from './LangItem.d'

export default function LangItem({name, code, onChange}: Props) {
    return <button
        onClick={() => onChange(code)}
        className="block w-full text-left px-4 py-2 hover:bg-primary-light transition-colors cursor-pointer rounded-sm"
    >
        {name}
    </button>
}

import type {SkillModel} from './Skill.d'

export default function Skill({title, description}: SkillModel) {
    return <div className={'border border-gray p-2 h-fit w-40'}>
        <h4>{title}</h4>
        <div className={'bg-gray h-px w-full my-2'}></div>
        <p className={'text-gray'}>{description}</p>
    </div>
}
import type {SkillModel} from './Skill.d'
import {useTranslation} from "react-i18next";

export default function Skill({title, description}: SkillModel) {
    const {t} = useTranslation();

    return <div className={'border border-gray p-2 h-fit w-40'}>
        <h4>{t(title)}</h4>
        <div className={'bg-gray h-px w-full my-2'}></div>
        <p className={'text-gray'}>{t(description)}</p>
    </div>
}

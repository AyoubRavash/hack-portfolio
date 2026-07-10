import type {ProjectModel} from './Project.d'
import {useTranslation} from "react-i18next";

function Project({image, title, technologies, description}: ProjectModel) {
    const {t} = useTranslation();

    return <div className={'border border-gray'}>
        {image && (<img className={'h-1/2 w-full'} src={image} alt={t('projects.imageAlt')}/>)}
        <ul className={'border border-gray border-r-0 border-l-0 flex items-center gap-2 text-gray p-2'}>
            {technologies.map(t => <li key={t}>{t}</li>)}
        </ul>
        <div className={'p-4'}>
            <h3 className={'text-2xl mb-4'}>{t(title)}</h3>
            <p className={'text-gray'}>{t(description)}</p>
        </div>
    </div>;
}

export default Project;

import type {ProjectModel} from './Project.d'

function Project({image, title, technologies, description}: ProjectModel) {
    return <div className={'border border-gray'}>
        {image && (<img className={'h-7/12 w-full'} src={image} alt="Project Image"/>)}
        <ul className={'border border-gray border-r-0 border-l-0 flex items-center gap-2 text-gray p-2'}>
            {technologies.map(t => <li key={t}>{t}</li>)}
        </ul>
        <div className={'p-4'}>
            <h3 className={'text-2xl mb-4'}>{title}</h3>
            <p className={'text-gray'}>{description}</p>
        </div>
    </div>;
}

export default Project;
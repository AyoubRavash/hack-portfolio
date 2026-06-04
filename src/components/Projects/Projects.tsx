import type {Props} from './Projects.d'
import Project from "./Project/Project.tsx";

function Projects({projects}: Props) {

    return <div className={'w-full'}>
        <ul className={'grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 w-full auto-rows-fr'}>
            {projects.map(p => <Project key={p.id} id={p.id} image={p.image} title={p.title} description={p.description}
                                        technologies={p.technologies}/>)}
        </ul>
    </div>
}

export default Projects;
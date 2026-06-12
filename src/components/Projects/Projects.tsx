import type {Props} from './Projects.d'
import Project from "./Project/Project.tsx";

function Projects({projects}: Props) {
    return (
        <div className={'w-full'}>
            <ul className={'grid grid-cols-[repeat(auto-fit,minmax(0,400px))] gap-4 w-full justify-center'}>
                {projects.map(p => (
                    <Project
                        key={p.id}
                        id={p.id}
                        image={p.image}
                        title={p.title}
                        description={p.description}
                        technologies={p.technologies}
                    />
                ))}
            </ul>
        </div>
    );
}


export default Projects;
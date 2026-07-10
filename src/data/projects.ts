import nestImg from '../assets/projects/nest-image.png'
import expressImg from '../assets/projects/express-image.png'
import hackPortfolioImg from '../assets/projects/hack-portfolio-image.png'
import {Technologies} from "../enums/technology.enum.ts";
import type {ProjectModel} from '../components/Projects/Project/Project.d'
import {v7} from 'uuid'

const PROJECTS: ProjectModel[] = [
    {
        id: v7(),
        image: hackPortfolioImg,
        title: 'projects.portfolio.title',
        description: 'projects.portfolio.description',
        technologies: [Technologies.REACT, Technologies.VITE, Technologies.TAILDWIND]
    },
    {
        id: v7(),
        image: nestImg,
        title: 'projects.legalAdvisor.title',
        description: 'projects.legalAdvisor.description',
        technologies: [Technologies.GRPC, Technologies.NESTJS, Technologies.MONGODB, Technologies.MICROSERVICES]
    },
    {
        id: v7(),
        image: expressImg,
        title: 'projects.digitalManager.title',
        description: 'projects.digitalManager.description',
        technologies: [Technologies.EXPRESSJS, Technologies.MYSQL]
    }
]

export default PROJECTS;

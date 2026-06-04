import nestImg from '../assets/projects/nest-image.png'
import expressImg from '../assets/projects/express-image.png'
import {Technologies} from "../enums/technology.enum.ts";
import type {ProjectModel} from '../components/Projects/Project/Project.d'
import {v7} from 'uuid'

const PROJECTS: ProjectModel[] = [
    {
        id: v7(),
        image: nestImg,
        title: "Legal Advisor",
        description: "Semi microservice system",
        technologies: [Technologies.GRPC, Technologies.NESTJS, Technologies.MONGODB, Technologies.MICROSERVICES]
    },
    {
        id: v7(),
        image: expressImg,
        title: 'Digital Manager',
        description: 'Employees attendance manager',
        technologies: [Technologies.EXPRESSJS, Technologies.MYSQL]
    },
    {
        id: v7(),
        image: nestImg,
        title: "Legal Advisor",
        description: "Semi microservice system",
        technologies: [Technologies.GRPC, Technologies.NESTJS, Technologies.MONGODB, Technologies.MICROSERVICES]
    },
    {
        id: v7(),
        image: expressImg,
        title: 'Digital Manager',
        description: 'Employees attendance manager',
        technologies: [Technologies.EXPRESSJS, Technologies.MYSQL]
    },
    {
        id: v7(),
        image: nestImg,
        title: "Legal Advisor",
        description: "Semi microservice system",
        technologies: [Technologies.GRPC, Technologies.NESTJS, Technologies.MONGODB, Technologies.MICROSERVICES]
    },
    {
        id: v7(),
        image: expressImg,
        title: 'Digital Manager',
        description: 'Employees attendance manager',
        technologies: [Technologies.EXPRESSJS, Technologies.MYSQL]
    }
]

export default PROJECTS;
export const Technologies = {
    MONGODB: "MongoDB",
    POSTGRESQL: "PostgreSQL",
    MYSQL: "MySQL",
    REDIS: "Redis",
    NESTJS: "NestJS",
    EXPRESSJS: "ExpressJS",
    MICROSERVICES: "Microservices",
    FASTIFY: "Fastify",
    GRPC: "Grpc",
    REACT: "React",
    VITE: 'Vite',
    TAILDWIND: 'Tailwind CSS',
} as const;

export type Technologies = typeof Technologies[keyof typeof Technologies];
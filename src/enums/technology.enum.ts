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
} as const;

export type Technologies = typeof Technologies[keyof typeof Technologies];
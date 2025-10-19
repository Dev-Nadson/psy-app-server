import type { FastifyInstance } from "fastify";

async function anamnesis_routes(app: FastifyInstance) {
    app.get("/", () => { })
}

export { anamnesis_routes }
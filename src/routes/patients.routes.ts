import type { FastifyInstance } from "fastify";

async function patients_routes(app: FastifyInstance) {
    app.get("/", () => { })
}

export { patients_routes }
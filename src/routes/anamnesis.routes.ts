import type { FastifyInstance } from "fastify";
import { protected_route_middleware } from "../middlewares/protected_route.middleware.js";

async function anamnesis_routes(app: FastifyInstance) {
    app.get("/", () => { })
}

export { anamnesis_routes }
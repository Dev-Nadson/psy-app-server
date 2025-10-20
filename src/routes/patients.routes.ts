import type { FastifyInstance } from "fastify";
import { protected_route_middleware } from "../middlewares/protected_route.middleware.js";

async function patients_routes(app: FastifyInstance) {
    app.get("/", () => { })
}

export { patients_routes }
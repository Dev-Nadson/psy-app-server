import type { FastifyInstance } from "fastify";
import { protected_route_middleware } from "../middlewares/protected_route.middleware.js";
import { professionals_routes } from "./professionals.routes.js";
import { anamnesis_routes } from "./anamnesis.routes.js";
import { patients_routes } from "./patients.routes.js";
import { session_routes } from "./sessions.routes.js";


async function app_routes(app: FastifyInstance) {
    app.register(professionals_routes, { prefix: "/professionals" })
    app.register(patients_routes, { onRequest: [protected_route_middleware], prefix: "/patients" })
    app.register(anamnesis_routes, { onRequest: [protected_route_middleware], prefix: "/anamnesis" })
    app.register(session_routes, { onRequest: [protected_route_middleware], prefix: "/login" })
}

export { app_routes }
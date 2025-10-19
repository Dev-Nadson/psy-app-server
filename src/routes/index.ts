import type { FastifyInstance } from "fastify";
import { professionals_routes } from "./professionals.routes.js";
import { anamnesis_routes } from "./anamnesis.routes.js";
import { patients_routes } from "./patients.routes.js";


async function app_routes(app: FastifyInstance) {
    app.register(professionals_routes, { prefix: "professionals/" })
    app.register(patients_routes, { prefix: "patients/" })
    app.register(anamnesis_routes, { prefix: "anamnesis/" })
}

export { app_routes }
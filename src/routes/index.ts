import type { FastifyInstance } from "fastify";
import { user_routes } from "./user.routes";

async function app_routes(app: FastifyInstance) {
    app.register(user_routes, { prefix: "users/" })
}

export { app_routes }
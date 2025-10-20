import type { FastifyInstance } from "fastify";
import { create_sessions_controller } from "../controllers/sessions/create-sessions.controller.js";

async function session_routes(app: FastifyInstance) {
    app.post("/login", create_sessions_controller)
}

export { session_routes }
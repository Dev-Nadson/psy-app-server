import type { FastifyInstance } from "fastify";
import { list_user_controller } from "../controllers/users/list-user.controller.js";

async function user_routes(app: FastifyInstance) {
    app.get("/", list_user_controller)
}

export { user_routes }
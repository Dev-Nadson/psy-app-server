import type { FastifyInstance } from "fastify";
import { list_professionals_controller } from "../controllers/professionals/list-professionals.controller.js";
import { get_professionals_controller } from "../controllers/professionals/get-professionals.controller.js";
import { create_professionals_controller } from "../controllers/professionals/create-professionals.controller.js";
import { update_professionals_controller } from "../controllers/professionals/update-professionals.controller.js";
import { delete_professionals_controller } from "../controllers/professionals/delete-professionals.controller.js";

async function professionals_routes(app: FastifyInstance) {
    app.get("/", list_professionals_controller)
    app.get("/:id", get_professionals_controller)
    app.post("/create", create_professionals_controller)
    app.get("/update", update_professionals_controller)
    app.get("/delete", delete_professionals_controller)
}

export { professionals_routes }
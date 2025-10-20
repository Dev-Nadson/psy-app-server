import type { FastifyInstance } from "fastify";
import { list_professionals_controller } from "../controllers/professionals/list-professionals.controller.js";
import { get_professionals_controller } from "../controllers/professionals/get-professionals.controller.js";
import { create_professionals_controller } from "../controllers/professionals/create-professionals.controller.js";
import { update_professionals_controller } from "../controllers/professionals/update-professionals.controller.js";
import { delete_professionals_controller } from "../controllers/professionals/delete-professionals.controller.js";
import { protected_route_middleware } from "../middlewares/protected_route.middleware.js";

async function professionals_routes(app: FastifyInstance) {
    app.addHook("onRequest", protected_route_middleware)
    app.get("/", list_professionals_controller)
    app.get("/:id", get_professionals_controller)
    app.post("/create", create_professionals_controller)
    app.put("/update", update_professionals_controller)
    app.delete("/delete", delete_professionals_controller)
}

export { professionals_routes }
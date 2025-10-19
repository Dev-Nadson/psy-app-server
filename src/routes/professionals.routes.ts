import type { FastifyInstance } from "fastify";

async function professionals_routes(app: FastifyInstance) {
    app.get("/", () => { })
    app.get("/:id", () => { })
    app.post("/create", () => { })
    app.get("/update", () => { })
    app.get("/", () => { })
}

export { professionals_routes }
import type { FastifyInstance } from "fastify";

async function user_routes(app: FastifyInstance) {
    app.get("/list", (req, reply) => { return reply.send("User") })
}

export { user_routes }
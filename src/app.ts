import fastify, { type FastifyInstance } from "fastify";
import { app_routes } from "./routes/index.js";
import { error_handler_middleware } from "./middlewares/error-handler.middleware.js";

async function create_app(): Promise<FastifyInstance> {
    const app = fastify()

    app.register(app_routes)
    app.setErrorHandler(error_handler_middleware)
    return app
}

export { create_app }
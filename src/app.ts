import fastify, { type FastifyInstance } from "fastify";
import jwt from "@fastify/jwt";
import { env } from "./config/env.config.js";
import { error_handler_middleware } from "./middlewares/error-handler.middleware.js";
import { app_routes } from "./routes/index.js";

function create_app(): FastifyInstance {
    const app = fastify()

    app.register(jwt, {
        secret: env.JWT_SECRET,
        sign: {
            expiresIn: env.JWT_EXPIRES_IN
        }
    })

    app.register(app_routes)
    app.setErrorHandler(error_handler_middleware)
    return app
}

export { create_app }
import fastify from "fastify";
import { app_routes } from "./routes/index.js";

const app = fastify()

app.register(app_routes)

export { app }
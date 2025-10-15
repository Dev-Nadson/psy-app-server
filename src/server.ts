import fastify from "fastify";
import { env } from "./config/env.config";
import { app_routes } from "./routes";

const app = fastify()

const PORT = env.PORT
const HOST = env.HOST

app.register(app_routes)

app.listen({ "port": PORT, "host": HOST }, () => {
    console.log(`Server is running on port: ${PORT}`)
    console.log(`Access on URL http://localhost:${PORT}`)
})
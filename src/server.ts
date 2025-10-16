import fastify from "fastify";
import { env } from "./config/env.config.js";
import { app_routes } from "./routes/index.js";

const app = fastify()

const PORT = env.PORT
const HOST = env.HOST

app.register(app_routes)

app.listen({ "port": PORT, "host": HOST }).then(() => {
    console.log(`Server is running on port: ${PORT}`)
    console.log(`Access on URL http://localhost:${PORT}`)
})


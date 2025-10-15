import fastify from "fastify";
import { env } from "./config/env.config";

const app = fastify()

const PORT = env.PORT
const HOST = env.HOST

app.get("/", (req, reply) => {
    return reply.status(200).send("Psyapp")
})

app.listen({ "port": PORT, "host": HOST }, () => {
    console.log(`Server is running on port: ${PORT}`)
    console.log(`Access on URL http://localhost:${PORT}`)
})
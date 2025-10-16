import type { FastifyRequest, FastifyReply } from "fastify";

async function list_user_controller(req: FastifyRequest, reply: FastifyReply) {
    reply.send("Hello World")
}

export { list_user_controller }
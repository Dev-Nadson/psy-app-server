import type { FastifyRequest, FastifyReply } from "fastify";

async function list_professionals_controller(req: FastifyRequest, reply: FastifyReply) {
    return reply.send()
}

export { list_professionals_controller }
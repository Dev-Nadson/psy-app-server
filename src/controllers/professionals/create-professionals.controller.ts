import type { FastifyRequest, FastifyReply } from "fastify";

async function create_professionals_controller(req: FastifyRequest, reply: FastifyReply) {
    return reply.send()
}

export { create_professionals_controller }
import type { FastifyRequest, FastifyReply } from "fastify";

async function get_professionals_controller(req: FastifyRequest, reply: FastifyReply) {
    return reply.send()
}

export { get_professionals_controller }
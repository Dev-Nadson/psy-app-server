import type { FastifyRequest, FastifyReply } from "fastify";

async function update_professionals_controller(req: FastifyRequest, reply: FastifyReply) {
    return reply.send()
}

export { update_professionals_controller }
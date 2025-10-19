import type { FastifyRequest, FastifyReply } from "fastify";

async function delete_professionals_controller(req: FastifyRequest, reply: FastifyReply) {
    return reply.send()
}

export { delete_professionals_controller }
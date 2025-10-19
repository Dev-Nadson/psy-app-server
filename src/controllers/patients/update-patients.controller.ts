import type { FastifyRequest, FastifyReply } from "fastify";

async function update_patients_controller(req: FastifyRequest, reply: FastifyReply) {
    return reply.send()
}

export { update_patients_controller }
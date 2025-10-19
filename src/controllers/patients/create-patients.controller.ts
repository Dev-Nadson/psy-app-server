import type { FastifyRequest, FastifyReply } from "fastify";

async function create_patients_controller(req: FastifyRequest, reply: FastifyReply) {
    return reply.send()
}

export { create_patients_controller }
import type { FastifyRequest, FastifyReply } from "fastify";

async function get_patients_controller(req: FastifyRequest, reply: FastifyReply) {
    return reply.send()
}

export { get_patients_controller }
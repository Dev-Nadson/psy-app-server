import type { FastifyRequest, FastifyReply } from "fastify";

async function list_patients_controller(req: FastifyRequest, reply: FastifyReply) {
    return reply.send()
}

export { list_patients_controller }
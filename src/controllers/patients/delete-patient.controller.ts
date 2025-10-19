import type { FastifyRequest, FastifyReply } from "fastify";

async function delete_patients_controller(req: FastifyRequest, reply: FastifyReply) {
    return reply.send()
}

export { delete_patients_controller }
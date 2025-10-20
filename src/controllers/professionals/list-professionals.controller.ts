import type { FastifyRequest, FastifyReply } from "fastify";
import { list_professionals_repository } from "../../repositories/professionals/list-professionals.repo.js";
async function list_professionals_controller(req: FastifyRequest, reply: FastifyReply) {
    const professionals = await list_professionals_repository()
    return reply.status(200).send({
        message: "Todos os usuários",
        data: professionals
    })
}

export { list_professionals_controller }
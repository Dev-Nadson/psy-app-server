import type { FastifyRequest, FastifyReply } from "fastify";
import { get_professionals_repository } from "../../repositories/professionals/get-professionals.repo.js";
import { professional_params_schema } from "../../schemas/professionals.schema.js";

async function get_professionals_controller(req: FastifyRequest, reply: FastifyReply) {
    const { id } = professional_params_schema.parse(req.params)

    const professional = await get_professionals_repository(id)
    return reply.status(200).send({
        message: `Aqui está o profissional de ID: ${id}`,
        data: professional
    })
}

export { get_professionals_controller }
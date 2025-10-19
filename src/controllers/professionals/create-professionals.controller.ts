import type { FastifyRequest, FastifyReply } from "fastify";
import { professional_schema } from "../../schemas/professionals.schema.js";
import { create_professional_repositorie } from "../../repositories/professionals/create-professionals.repo.js";

async function create_professionals_controller(req: FastifyRequest, reply: FastifyReply) {
    const { name, email, password } = professional_schema.parse(req.body)
    const professional = await create_professional_repositorie({ name, email, password })

    return reply.status(201).send({
        "message": "Profissional criado com sucesso!",
        "data": professional
    })
}

export { create_professionals_controller }
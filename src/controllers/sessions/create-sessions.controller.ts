import type { FastifyRequest, FastifyReply } from "fastify";
import { session_schema } from "../../schemas/sessions.schema.js";
import { create_session_repository } from "../../repositories/sessions/create-sessions.repo.js";
import { professional_schema } from "../../schemas/professionals.schema.js";

async function create_sessions_controller(req: FastifyRequest, reply: FastifyReply) {
    const { email, password } = session_schema.parse(req.body)

    const user = await create_session_repository({ email, password })
    const token = req.server.jwt.sign({
        sub: user.sub,
        email: user.email,
        name: user.name
    });

    return reply.status(200).send({
        message: "Login concluído com secesso",
        data: {
            professional: user,
            token
        }
    })
}

export { create_sessions_controller }   
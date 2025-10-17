import type { FastifyRequest, FastifyReply } from "fastify";
import { ZodError } from "zod";
import z from "zod";

async function error_handler_middleware(error: unknown, req: FastifyRequest, reply: FastifyReply) {
    if (error instanceof ZodError) {
        return reply.status(400).send({
            error: "Dados Inválidos",
            issues: z.treeifyError(error)
        })
    }

    console.error(`Erro sem tratamento: ${error}`)
    return reply.status(500).send({ error: 'Erro interno no servidor' })
}

export { error_handler_middleware }
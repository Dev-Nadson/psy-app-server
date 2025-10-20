import type { FastifyRequest, FastifyReply } from "fastify";
import type { IProfile } from "../schemas/types/professionals.types.js";
import { UnauthorizedError } from "../utils/errors/app-errors.js";

declare module 'fastify' {
    interface FastifyRequest {
        user: IProfile
    }
}

async function protected_route_middleware(req: FastifyRequest, reply: FastifyReply) {
    try {
        const authHeader = req.headers.authorization

        if (!authHeader) {
            throw new UnauthorizedError("Token de autenticação não fornecido");
        }

        const parts = authHeader.split(" ");
        if (parts.length !== 2 || parts[0] !== "Bearer") {
            throw new UnauthorizedError("Token inválido, use Bearer Token")
        }

        const token = parts[1]

        const decoded = await req.server.jwt.verify<IProfile>(token)

        req.user = {
            sub: decoded.sub,
            email: decoded.email,
            name: decoded.name
        };

    } catch (error) {

    }

}

export { protected_route_middleware }
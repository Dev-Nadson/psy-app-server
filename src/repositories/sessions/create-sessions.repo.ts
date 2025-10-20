import { Knex } from "../../database/config.js";
import { UnauthorizedError } from "../../utils/errors/app-errors.js";
import { compare_text } from "../../utils/encryptation.js";
import type { ISessionInput, IsessionOutput } from "../../schemas/types/sessions.types.js";

async function create_session_repository({ email, password }: ISessionInput): Promise<IsessionOutput> {
    const user = await Knex("professionals").where({ email }).first()

    if (!user) {
        throw new UnauthorizedError("Email ou Senha Inválidos")
    }

    const password_match = await compare_text(password, user.password)

    if (!password_match) {
        throw new UnauthorizedError("Email ou Senha Inválidos")
    }

    return {
        id: user.id,
        name: user.name,
        email: user.email
    }
}

export { create_session_repository }
import { Knex } from "../../database/config.js";
import { create_id } from "../../utils/utils.js";
import { hash_text } from "../../utils/encryptation.js";
import { ConflictError, InternalServerError } from "../../utils/errors/app-errors.js";
import type { IcreateProfessionalInput, ICreateProfessionalOutput } from "../../schemas/types/professionals.types.js";

async function create_professional_repositorie({ name, email, password }: IcreateProfessionalInput): Promise<ICreateProfessionalOutput> {

    const exist_professional = await Knex("professionals").select("id").where({ email }).first()

    if (exist_professional) {
        throw new ConflictError("Email já cadastrado no sistema")
    }

    let hashed_password
    try {
        hashed_password = await hash_text(password)
    } catch (error) {
        console.error("Erro ao criptografar a senha:", error)
        throw new InternalServerError("Falha ao processar a senha")
    }

    const data = {
        id: create_id(),
        name,
        email,
        password: hashed_password
    }

    await Knex("professionals").insert(data)
    const created_professional = await Knex("professionals").select("id", "name", "email", "created_at").where({ id: data.id }).first()

    if (!created_professional) {
        throw new InternalServerError("Falha ao criar o profissional")
    }

    return created_professional
}

export { create_professional_repositorie }
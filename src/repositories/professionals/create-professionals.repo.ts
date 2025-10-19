import { Knex } from "../../database/config.js";
import { create_id } from "../../utils/utils.js";
import { hash_text } from "../../utils/encryptation.js";

interface IcreateProfessionalInput {
    name: string
    email: string
    password: string
}

async function creare_professional_repositorie({ name, email, password }: IcreateProfessionalInput) {
    const data = {
        id: create_id(),
        name,
        email,
        password: await hash_text(password)
    }

    await Knex("professionals").insert(data)
    return await Knex("professionals").select().where({ "id": data.id })
}

export { creare_professional_repositorie }

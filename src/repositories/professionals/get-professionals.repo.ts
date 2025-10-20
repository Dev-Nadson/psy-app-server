import { Knex } from "../../database/config.js";
import { NotFoundError } from "../../utils/errors/app-errors.js";

async function get_professionals_repository(id: string) {
    const professional = await Knex("professionals").select("id", "name", "email", "created_at").where({ id, deleted_at: null }).first()

    if (!professional) {
        throw new NotFoundError("O usuário não foi encontrado")
    }

    return professional
}

export { get_professionals_repository }
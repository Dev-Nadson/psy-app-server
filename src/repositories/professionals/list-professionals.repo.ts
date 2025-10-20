import { Knex } from "../../database/config.js";
import type { ICreateProfessionalOutput } from "../../schemas/types/professionals.types.js";

async function list_professionals_repository() {
    const professionals = await Knex("professionals").select("id", "name", "email", "created_at").where({ deleted_at: null })
    return professionals
}

export { list_professionals_repository }
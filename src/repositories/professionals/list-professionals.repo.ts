import { Knex } from "../../database/config.js";

async function list_professionals_repository() {
    const professionals = await Knex("professionals").select()
    return professionals
}

export { list_professionals_repository }
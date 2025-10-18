import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("anamnesis", (table) => {
        table.string("id").primary().notNullable()
        table.string("patient_id").references("id").inTable("patients").notNullable()
        table.string("psychologist_id").references("id").inTable("professionals").notNullable()
        table.date("anamnesis_date").notNullable()
        table.text("complaint").notNullable()
        table.text("patient_history").notNullable()
        table.timestamp("created_at").defaultTo(knex.fn.now()).notNullable()
        table.timestamp("updated_at").defaultTo(knex.fn.now()).notNullable()
    })
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("anamnesis")
}


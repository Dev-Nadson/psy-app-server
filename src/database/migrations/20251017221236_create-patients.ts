import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("patients", (table) => {
        table.string("id").primary().notNullable()
        table.string("psychologist_id").references("id").inTable("users").notNullable()
        table.string("name").notNullable()
        table.date('date_of_birth').notNullable()
        table.string("gender").notNullable()
        table.string("phone_number").unique().notNullable()
        table.text("adress").notNullable()
        table.text("observations").notNullable()
        table.timestamp("created_at").defaultTo(knex.fn.now()).notNullable()
        table.timestamp("updated_at").defaultTo(knex.fn.now()).notNullable()
    })
}

export async function down(knex: Knex): Promise<void> {
    knex.schema.dropTable("patients")
}


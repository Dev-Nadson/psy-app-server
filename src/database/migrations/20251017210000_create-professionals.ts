import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("professionals", (table) => {
        table.string("id").primary().notNullable()
        table.string("name").notNullable()
        table.string("email").unique().notNullable()
        table.string("password").notNullable()
        table.timestamp("created_at").defaultTo(knex.fn.now()).notNullable()
        table.timestamp("updated_at").defaultTo(knex.fn.now()).notNullable()
        table.timestamp("deleted_at").defaultTo(null)
    })
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("professionals")
}

exports.up = async function(knex) {
    await knex.schema.createTable("fruits", (table) => {
        //table.integer("id").notNull().unique().primary()
        // translate to "id" same as above.
        table.increments("id")
        // translate to "name" NOT NULL UNIQUE in SQL
        table.text("name").notNull().unique()
        // translate to "avg@eightOz" FLOAT
        table.float("avgWeightOz")
        // translates to "delicious" BOOLEAN DEFAULT 0
        table.boolean("delicious").defaultTo(false)
    })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('fruits')
};

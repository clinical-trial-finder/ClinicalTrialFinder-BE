
exports.up = function (knex, Promise) {
    return knex.schema.createTable('studies', tbl => {
        tbl.increments()

        tbl
            .string('nct_id', 128)
            .notNullable()
            .unique();

        tbl
            .string('start_date', 128)


        tbl
            .string('completion_date', 128)


        tbl
            .string('study_type', 128)
            .notNullable()

        tbl
            .string('overall_status', 128)
            .notNullable()

        tbl
            .string('brief_title', 128)
            .notNullable()

        tbl
            .string('phase', 128)

        tbl
            .string('source', 128)
            .notNullable()

        tbl
            .string('summary', 128)
            .notNullable()

        tbl
            .string('sponsor', 128)
            .notNullable()

        tbl
            .string('condition_name', 128)
            .notNullable()

    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('studies');
};


exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', tbl =>{
      tbl.increments()

      tbl
      .string('name', 128)
      .notNullable()
      .unique()
      
      tbl
      .string('description', 255)
      .notNullable()

      tbl
      .timestamps(true, true)

      tbl
      .boolean('iscompleted').defaultTo(false)
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExist('projects')
  
};

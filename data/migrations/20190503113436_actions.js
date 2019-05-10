
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', tbl =>{
        tbl.increments()
  
        
        
        tbl
        .string('description', 255)
        .notNullable()

        tbl
        .string('notes', 255)
        .notNullable()
  
        tbl
        .timestamps(true, true)
  
        tbl
        .boolean('iscompleted').defaultTo(false)

        tbl
          .integer('projects_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('projects')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE');
      

        
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExist('actions')
  
};

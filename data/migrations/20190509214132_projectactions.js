
exports.up = function(knex, Promise) {
  return knex.schema.createTable( 'projectactions', tbl =>{
    tbl.increments()

    tbl
          .integer('projects_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('projects')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE');


          tbl
          .integer('actions_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('actions')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE');
  })
};

exports.down = function(knex, Promise) {
  
};

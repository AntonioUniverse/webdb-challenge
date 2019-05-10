const db = require('./dbconfig');

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
};
// get the cohort
// get the students for the cohort
// cohort.students = students;
// const cohort = {
//   ...dataOfCohort,
//   students: [
//     {}
//   ]
// }

function find() {
  return db('actions');
}

function findById(id) {
  return db('actions')
    .where({ id })
    .first();
}

function add(actions) {
  // passing 'id' as the second parameter is recommended to ensure the id is returned
  // when connecting to other database management systems like Postgres
  return db('actions')
    .insert(actions, 'id')
    .then(([id]) => {
      return findById(id);
    });
}

function update(id, changes) {
  return db('actions')
    .where({ id })
    .update(changes)
    .then(count => {
      if (count > 0) {
        return findById(id);
      } else {
        return null;
      }
    });
}

function remove(id) {
  return db('actions')
    .where({ id })
    .del();
}
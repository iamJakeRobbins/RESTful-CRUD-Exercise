var knex = require('./connection');

function getAll() {
	// Get all cartoons and return them to the route
	return knex('cartoon');
}

function getOne(id) {
	// Get one cartoon by the id and return it
	return knex('cartoon').where('id', id);
}

function create(cartoon) {
	// Add a cartoon to the database
	return knex('cartoon').insert(cartoon)
}

function update(id, cartoon) {
	// Update a cartoon with the specified id
	return knex('cartoon').update(cartoon).where('id', id);
}

function remove(id) {
	// Delete the specified cartoon
	return knex('cartoon').where('id', id).del()
}
module.exports = {
	getAll,
	getOne,
	create,
	update,
	remove
};

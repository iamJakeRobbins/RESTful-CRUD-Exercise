var express = require('express');
var router = express.Router();
// Bring in the queries object that has all of the db query functions
var db = require('../db/query');

// Create the route for get all
router.get('/', (req, res, next) => {
	db.getAll()
		.then(cartoons => res.json(cartoons))
		.catch(err => next(err));
});

// Create the route for get one
router.get('/:id', (req, res, next) => {
	const id = req.params.id;

	db.getOne(id)
		.then(cartoon => res.json(cartoon))
		.catch(err => next(err));
})

// Create the route for creating an item
router.post('/', (req, res, next) => {
	db.create(req.body)
		.then((result) => res.sendStatus(201))
		.catch(err => {
			console.log(err);
			next(err);
		});
});

// Create the route for updating
router.put('/:id', (req, res, next) => {
	const id = req.params.id;

	db.update(id, req.body)
		.then(() => res.sendStatus(200))
		.catch(err => next(err));
});

router.patch('/:id', (req, res, next) => {
	const id = req.params.id;

	db.update(id, req.body)
		.then(() => res.sendStatus(200))
		.catch(err => next(err));
});

// Route for deleting an item
router.delete('/:id', (req, res, next) => {
	const id = req.params.id;

	db.remove(id)
		.then(() => res.sendStatus(200))
		.catch(err => next(err));
});

module.exports = router;

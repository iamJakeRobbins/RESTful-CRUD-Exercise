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


// Create the route for creating an item


// Create the route for updating


// Route for deleting an item


module.exports = router;

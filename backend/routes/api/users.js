const express = require('express');
const router = express.Router();
const {
	getUsers,
} = require('../../db/queries/user-queries');

router.get('/', (req, res) => {
	getUsers()
		.then((data) => res.json(data))
		.catch((err) => console.log('Error at users GET route "/"', err));
});



module.exports = router;

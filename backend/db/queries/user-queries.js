const db = require('../../lib/db.js');

const getUsers = () => {
	const text = `
	SELECT *
	FROM users;`;

	return db
		.query(text)
		.then((res) => res.rows)
		.catch((err) => console.log(`Error at users queries 'getUsers'`, err));
};


module.exports = {
	getUsers,

};

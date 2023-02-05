const db = require('./db');
const helper = require('../helper');

async function getAll() {
    const rows = await db.query(
        'SELECT * FROM rol;'
    );

    const data = helper.emtyOrRows(rows);

    return data;
}

module.exports = {
    getAll
}
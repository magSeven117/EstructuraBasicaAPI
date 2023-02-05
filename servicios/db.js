const mysql = require('mysql2/promise');
const config = require('../config');

async function query(sql, params) {
    const connetion = await mysql.createConnection(config.db);
    const [results] = await connetion.execute(sql, params);

    return results;
}

module.exports = {
    query
}
/* Load modules */
let sqlite3 = require('sqlite3').verbose();

/*
 * Database configuration
 */

/* Load database file (Creates file if not exists) */
let db = new sqlite3.Database('./test.db');

/* Init car and driver tables if they don't exist */
let init = function () {
    db.run(`CREATE TABLE if not exists todo(subject TEXT PRIMARY KEY,status TEXT, created TEXT, modified TEXT, category TEXT)`);
      

    db.run("CREATE TABLE if not exists category (" +
        "name PRIMARY KEY," +
        "created TEXT," +
        "modified TEXT," +
        "todo TEXT" +
        ")");
};

module.exports = {
    init: init,
    db: db
};

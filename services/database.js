"use strict";

import Database from 'better-sqlite3';

const db = new Database('log.db');

const stmt = db.prepare(`
    SELECT name FROM sqlite_master WHERE type='table' and name='accesslog';`
    );

let row = stmt.get();
if (row === undefined) {
    console.log('Your database appears to be empty. I will initialize it now.');
    const sqlInit = `
        CREATE TABLE accesslog ( id INTEGER PRIMARY KEY, remoteaddr TEXT, remoteuser TEXT, time TEXT, method TEXT, url TEXT, protocol TEXT,
            httpversion TEXT, status INT, referer TEXT, useragent TEXT );
    `;
    db.exec(sqlInit);
    console.log('Database has been initialized.');
}

export default db
import {openDB} from "idb/build/esm/index"; //https://github.com/jakearchibald/idb


async function initDB() {
    const db = await openDB( 'DB', 1, {
        upgrade: function ( db ) {
            const loginStore = db.createObjectStore( 'loginStore', {
                keyPath: 'username'
            } );
            loginStore.createIndex('email', 'email', {
                unique: true
            });

            const tasksStore = db.createObjectStore( 'tasksStore', {
                keyPath: '_id',
                autoIncrement: true
            } );
            tasksStore.createIndex('_creator', '_creator');
        }
    } );

    return db;
}

export const DB = initDB();


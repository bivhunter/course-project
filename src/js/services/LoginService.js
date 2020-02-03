import {openDB} from "idb/build/esm/index";
import {db} from "../store/DB.js";


export class LoginService {
    constructor() {
    }

    checkInputData(data, prop) {

    }


    async signUp(data) {

        return new Promise(resolve => {
           // const usernameList = await this.db.getAll('loginStore');
        });

    }

    async addUser(data) {
        await db;
        db.add('loginStore', data).
        then(res => console.log('res', res)).
        catch(res => console.log('error', res));
    }

    async getAll() {
        const db = await this.openDB();
        return db.getAllFromIndex('loginStore', 'email');
    }

    delete(id) {
        const tx = this.db.transaction('todoList', 'readwrite');
        const index = tx.db.getAllFromIndex('todoList', '_creator');
    }
}

export const dbService = new LoginService();

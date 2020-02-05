import {openDB} from "idb/build/esm/index";
import {DB} from "../store/DB.js";


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
        const db = await DB;
        db.add('loginStore', data)
    }

    async getAll() {
        const db = await DB;
        return db.getAllFromIndex('loginStore', 'email');
    }

    delete(id) {
        const tx = this.db.transaction('todoList', 'readwrite');
        const index = tx.db.getAllFromIndex('todoList', '_creator');
    }
}

export const loginService = new LoginService();

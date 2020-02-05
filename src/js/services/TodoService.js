import {DB} from "../store/DB.js";


export class TodoService {
    constructor() {
    }

    async get(token) {
        const db = await DB;
        return db.getAllFromIndex('tasksStore', token);
    }

}

export const todoService = new TodoService();

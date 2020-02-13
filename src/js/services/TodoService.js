import {DB} from "../store/DB.js";


export class TodoService {
    constructor() {
    }

    async put(task) {
        const db = await DB;
        try {
            const response = await db.put('tasksStore', task, '_id');
            console.log('put', response);
        } catch {
            console.log('error');
        }

        return {...task};
    }

    async get(token) {
        const db = await DB;
        const response = await db.getAllFromIndex('tasksStore', '_creator', token);
        return response.reverse();
    }

    async delete(id) {
        const db = await DB;
        const response = await db.delete('tasksStore', id, '_id');
        return response;
    }

    getDate() {
        const date = new Date();
        return `${('0' + date.getDate()).slice(-2)}.${('0' + (date.getMonth() + 1)).slice(-2)}.${date.getFullYear()}`;
    }

    async post(task) {
        const db = await DB;
        const data = {
            text: task.text,
            completed: false,
            createDate: this.getDate(),
            _creator: localStorage.getItem('currentToken')
        };

        const response = await db.add('tasksStore', data);

        return {...data, _id: response};
    }


}



export const todoService = new TodoService();

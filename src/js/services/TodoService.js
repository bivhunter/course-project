import {DB} from "../store/DB.js";


export class TodoService {
    constructor() {
    }

    async put(task) {

        try {
            const db = await DB;
            const response = await db.put( 'tasksStore', task );
            return { ...task };
        } catch ( e ) {
            return Promise.reject( Promise.resolve({error: "DataBase error"}) );
        }
    }

    async get(token) {
        try {
            const db = await DB;
            const response = await db.getAllFromIndex( 'tasksStore', '_creator', token );
            return response.reverse();
        } catch ( e ) {
            return Promise.reject( Promise.resolve({error: "DataBase error"}) );
        }
    }

    async delete(id) {
        try {
            const db = await DB;
            const response = await db.delete( 'tasksStore', id, '_id' );
            return response;
        } catch ( e ) {
            return Promise.reject( Promise.resolve({error: "DataBase error"}) );
        }
    }

    getDate() {
        const date = new Date();
        return `${('0' + date.getDate()).slice(-2)}.${('0' + (date.getMonth() + 1)).slice(-2)}.${date.getFullYear()}`;
    }

    async post(task) {
        try {
            const db = await DB;
            const data = {
                text: task.text,
                completed: false,
                createDate: this.getDate(),
                _creator: localStorage.getItem( 'currentToken' )
            };

            const response = await db.add( 'tasksStore', data );
            return { ...data, _id: response };
        } catch ( e ) {
            return Promise.reject( Promise.resolve( { error: "DataBase error" } ) );
        }
    }


}



export const todoService = new TodoService();

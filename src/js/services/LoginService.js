import {DB} from "../store/DB.js";


export class LoginService {
    constructor() {
    }

    checkAuthorization(token) {
        if(!localStorage.getItem('currentToken')) {
            return false;
        }
        return localStorage.getItem('currentToken') === token;
    }

    async signIn(data) {
        const db = await DB;
        const user = await db.getFromIndex('loginStore', 'email', data.email);
        if(!user) {
            throw Promise.resolve({error: "This email doesn't exist"});
        }

        if(user.password !== data.password) {
            throw Promise.resolve({error: "Password error"});
        }

        localStorage.setItem('currentToken', user.token);
        return {token: user.token};
    }

   generateToken() {
        let arr = [];
        for (let i = 0; i < 20; i++){
            arr.push(Math.floor(Math.random() * 10));
        }
        let token = arr.join('');
        console.log('geToken', token);
        return token;
    }

    async addUser(data) {
        const db = await DB;

        const token = this.generateToken();

        try {
            const response = await db.add('loginStore', {
                ...data,
                token
            });
            localStorage.setItem('currentToken', token);
           // console.log(await db.getAllFromIndex('loginStore', 'email'));
            //console.log(response);
            return { token };
        } catch  {
           // console.log('error');
            throw new Error('error');
        }

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

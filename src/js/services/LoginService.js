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
        try {
            const db = await DB;
            const user = await db.getFromIndex('loginStore', 'email', data.email);

            if (!user) {
                throw new Error ("This email doesn't exist");
            }

            if (user.password !== data.password) {
                throw new Error("Password error");
            }

            localStorage.setItem('currentToken', user.token);
            return {token: user.token};
        } catch (error) {
            if(error.name === "NotFoundError") {
                throw new Error ("DataBase error, try again");
            }

            throw new Error(error.message);
        }
    }

   generateToken() {
        let arr = [];
        for (let i = 0; i < 20; i++){
            arr.push(Math.floor(Math.random() * 10));
        }
        let token = arr.join('');
        return token;
    }

    checkData(data) {
        if(!data.username || data.username.length < 5) {
            return "Enter username longer than 5 characters";
        }
        if(!data.email || !data.email.includes('@')) {
            return "Enter correct email";
        }
        if(!data.password || data.password.length < 6) {
            return "Enter password longer than 6 characters";
        }
    }

    async addUser(data) {
        let errorMessage = this.checkData(data);

        if(errorMessage) {
            throw new Error(errorMessage);
        }

        try {
        const db = await DB;

        const token = this.generateToken();
            const response = await db.add('loginStore', {
                ...data,
                token
            });
            localStorage.setItem('currentToken', token);
            return { token };
        } catch (error) {

            errorMessage = "DataBase error, try again";
            if(error.message === "AbortError") {
                errorMessage = "User with this username or email already exist";
            }
            throw new Error(errorMessage);
        }
    }
}

export const loginService = new LoginService();

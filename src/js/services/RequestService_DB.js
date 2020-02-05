import {loginService} from "./LoginService.js";

class RequestService{
    constructor() {
        this.token = localStorage.getItem('token');
    }

    checkAuthorization() {
        return new Promise()
    }

    post(task) {

    }

    get() {

    }

    delete(id) {

    }

    put(task) {

    }

    signIn(data) {

    }

    generateToken() {
        let arr = [];
        for (let i = 0; i < 20; i++){
            arr.push(Math.floor(Math.random() * 10));
        }
        let token = arr.join('');
        console.log('geToken', token)
        return token;
    }


    async signUp(data) {
        if(!data.username) {
            return Promise.reject("Enter username");
        }
        if(!data.email) {
            return Promise.reject("Enter email");
        }
        if(!data.password) {
            return Promise.reject("Enter password");
        }

        try{
            const response =  await loginService.addUser(data);
            return { token: this.generateToken()};
        } catch {
            return Promise.reject({error: "User with this username or email already exist"})
        }

    }
}

export const requestService = new RequestService();
import {loginService} from "./LoginService.js";
import {todoService} from "./TodoService.js";

class RequestService{
    constructor() {
        this.token = localStorage.getItem('token');
    }

    checkAuthorization() {
        return new Promise((resolve, reject) => {
            if (loginService.checkAuthorization(this.token)) {
                resolve(this.token);
            } else {
                reject("error");
            }
        });


    }

    post(task) {

    }

    get() {
       return todoService.get(this.token);
    }

    delete(id) {

    }

    put(task) {

    }

    signIn(data) {

    }




    async signUp(data) {
        if(!data.username) {
            return Promise.reject("Enter username");
        }
        if(!data.email) {
            return Promise.reject("Enter email");
        }
        if(!data.password) {
            console.log("Enter password");
           throw Promise.resolve({error: "Enter password"});
        }

        try{
            await loginService.addUser(data);
        } catch {
            throw ({error: "User with this username or email already exist"});
        }

    }
}

export const requestService = new RequestService();
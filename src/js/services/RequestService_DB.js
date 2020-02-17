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

    async post(task) {
        if(task.text.length < 5) {
            return Promise.reject( Promise.resolve({error: "Enter more than 5 characters"}) );
        }

        return todoService.post(task);
    }

    get() {
       return todoService.get(this.token);
    }

    async delete(id) {
        return todoService.delete(id);
    }

    async put(task) {
        return todoService.put(task)
    }

    async signIn(data) {
        return loginService.signIn(data);
    }




    async signUp(data) {
        if(!data.username || data.username.length < 5) {
            return Promise.reject( Promise.resolve({error: "Enter username longer than 5 characters"}) );
        }
        if(!data.email || !data.email.includes('@')) {
            return Promise.reject( Promise.resolve({error: "Enter correct email"} ));
        }
        if(!data.password || data.password.length < 6) {
           return Promise.reject( Promise.resolve({error: "Enter password longer than 6 characters"}) );
        }

        try{
            const response = await loginService.addUser(data);
            return response;
        } catch {
            throw Promise.resolve({error: "User with this username or email already exist"});
        }

    }
}

export const requestService = new RequestService();
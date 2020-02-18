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

        try{
            const response = await loginService.addUser(data);
            return response;
        } catch (error){
            throw Promise.resolve({ error });
        }

    }
}

export const requestService = new RequestService();
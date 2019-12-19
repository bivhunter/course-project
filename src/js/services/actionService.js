import {eventService} from "./eventService.js";
import {routeService} from "./routeService.js";
import {requestService} from "./requestService.js";
import {store} from "../store/Store.js";

class ActionService{
    constructor() {
        this.initHandlers();
        this.onInit();
    }

    onInit() {
        console.log('init actionService');
    }

    initHandlers() {
        this.handlers = {
            'addTask': (text) => this.addTask({
                text: text,
                completed: false,
            }),
            'initTodoComponent': () => this.getTaskList(),
            //'applicationInit': () => this.checkAuthorization(),
            'initApplication': () => this.initApplication(),
            'deletedTask': (id) => this.deleteTask(id),
            'doneTask': (task) => this.changeTask({...task, completed: !task.completed}),
            'startEditTask': (task) => this.changeTaskLocal({...task, editing: true}),
            /*'cancelEditTask': (task) => {
                delete task.editing;
                this.changeTaskLocal({...task});
            },*/
            'endEditTask': (task) => {
            delete task.editing;
            this.changeTaskLocal({...task});
            },
            'allFilter': () => this.tasksFilter('allTasks'),
            'doneFilter': () => this.tasksFilter('doneTasks'),
            'notDoneFilter': () => this.tasksFilter('notDoneTasks'),
            'signIn': (data) => this.signIn(data),
            'signOut': () => this.signOut(),
            'signUp': (data) => this.signUp(data),
        }
    }

    dispatch(action, payload) {
        if(this.handlers[action]) {
            const start = performance.now();

           // console.log('dispatch actionService', action, payload);
            this.handlers[action](payload);
            console.log('handlers', performance.now() - start);
        }
    }

    checkAuthorization() {

    }

    getTaskList() {
        //console.log('getTaskList')
        requestService.get()
            .then(data => store.dispatch('INIT_TODO', data));
    }


    addTask(task){
        requestService.post(task)
            .then(data => {
                store.dispatch('ADD_TODO', data);
            })
            .catch(error => console.log(error));
    }

    deleteTask(id){
        requestService.delete(id)
            .then(() => store.dispatch('DELETE_TODO', id));
    }

    changeTask(task) {
         console.log('changeTask', task)
       requestService.put(task)
           .then((task) => store.dispatch('CHANGE_TODO', task));
    }

    changeTaskLocal(task) {
            store.dispatch('CHANGE_TODO', task);
    }

    tasksFilter(method) {
        store.dispatch('FILTER', method);
    }

    signIn(data) {
        requestService.signIn(data)
            .then(res => {
                localStorage.setItem('token', res.token);
                requestService.token = res.token;
                store.dispatch('SIGN_IN', res.token);

                console.log(res.token)

            })
            .catch(error => console.log(error));
        console.log(data);
    }

    signOut() {
        localStorage.removeItem('token');
        store.dispatch('SIGN_OUT');
    }

    signUp(data) {
        console.log(data)
        requestService.signUp(data)
            .then(res => {
                localStorage.setItem('token', res.token);
                requestService.token = res.token;
                store.dispatch('SIGN_IN', res.token);

                console.log(res.error)

            })
            .catch(error => error.then((res) => console.log(res.error)));
    }

    initApplication() {
        let route = routeService.changeRoute('login');
        requestService.checkAuthorization()
            .then(() => {
                route = routeService.changeRoute('todo');
                store.dispatch('CHANGE_ROUTE', {
                    route,
                    message: {
                        text : 'Logged in',
                        status: true
                    }});
            })
            .catch(() => {
                store.dispatch('CHANGE_ROUTE', {
                    route,
                    message: {
                        text : 'Login, Please',
                        status: true
                    }});
            });

    }
}

export const actionService = new ActionService();
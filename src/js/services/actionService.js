import {EventService} from "./eventService.js";

export class ActionServices {
    constructor(props) {
        this.store = props.store;
        this.requestService = props.requestService;
        //this.eventService = props.eventService;
        this.initHandlers();
        this.onInit();
    }

    onInit() {
        console.log('init actionService');
        this.dispatch('initApplication', '');
    }

    initHandlers() {
        this.handlers = {
            'addTask': (text) => this.addTask({
                text: text,
                completed: false,
            }),
            'initTodoComponent': () => this.getTaskList(),
            'applicationInit': () => this.checkAuthorization(),
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
        this.requestService.get()
            .then(data => this.store.dispatch('INIT_TODO', data));
    }


    addTask(task){
        this.requestService.post(task)
            .then(data => {
                this.store.dispatch('ADD_TODO', data);
            })
            .catch(error => console.log(error));
    }

    deleteTask(id){
        this.requestService.delete(id)
            .then(() => this.store.dispatch('DELETE_TODO', id));
    }

    changeTask(task) {
         console.log('changeTask', task)
       this.requestService.put(task)
           .then((task) => this.store.dispatch('CHANGE_TODO', task));
    }

    changeTaskLocal(task) {
            this.store.dispatch('CHANGE_TODO', task);
    }

    tasksFilter(method) {
        this.store.dispatch('FILTER', method);
    }

    signIn(data) {
        this.requestService.signIn(data)
            .then(res => {
                localStorage.setItem('token', res.token);
                this.requestService.token = res.token;
                this.store.dispatch('SIGN_IN', res.token);

                console.log(res.token)

            })
            .catch(error => console.log(error));
        console.log(data);
    }

    signOut() {
        localStorage.removeItem('token');
        this.store.dispatch('SIGN_OUT');
    }

    signUp(data) {
        console.log(data)
        this.requestService.signUp(data)
            .then(res => {
                localStorage.setItem('token', res.token);
                this.requestService.token = res.token;
                this.store.dispatch('SIGN_IN', res.token);

                console.log(res.error)

            })
            .catch(error => error.then((res) => console.log(res.error)));
    }


}
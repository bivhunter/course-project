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
            'addTask': (title) => this.addTask({
                title: title,
                completed: false,
            }),
            'initApplication': () => this.getTaskList(),
            'deletedTask': (id) => this.deleteTask(id),
            'doneTask': (task) => this.changeTask({...task, completed: !task.completed}),
            'startEditTask': (task) => this.changeTaskLocal({...task, editing: true}),
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

    getTaskList() {
       // console.log('getTaskList')
        this.requestService.get()
            .then(data => this.store.dispatch('INIT_STATE', data));
    }


    addTask(task){
        this.requestService.post(task)
            .then(data => {
                this.store.dispatch('ADD_TODO', data);
            })
    }

    deleteTask(id){
        this.requestService.delete(id)
            .then(() => this.store.dispatch('DELETE_TODO', id));
    }

    changeTask(task) {
         console.log('changeTask', task)
       this.requestService.put(task)
           .then((task) => this.store.dispatch('CHANGE_TODO', task))
    }

    changeTaskLocal(task) {
            this.store.dispatch('CHANGE_TODO', task);
    }


}
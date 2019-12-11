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
            'initApplication': () => this.getTaskList()
        }
    }

    dispatch(action, payload) {
        if(this.handlers[action]) {
            console.log('dispatch actionService', action, payload);
            this.handlers[action](payload);
        }
    }

    getTaskList() {
        console.log('getTaskList')
        this.requestService.get()
            .then(data => this.store.dispatch('INIT_STATE', data));
    }


    addTask(task){
        this.requestService.post(task)
            .then(data => {
                this.store.dispatch('ADD_TODO', data);
            })
    }



}
import './css/style.css';
import {
    counterService
} from "./js/services/CounterService.js";
import {
    TaskComponent
} from './js/components/TaskComponent.js';
import {
    EventService
} from "./js/services/eventService.js";
import {
    TodoComponent
} from "./js/components/TodoComponent.js";
import {
    RequestService
} from "./js/services/requestService.js";
import {
    ActionServices
} from "./js/services/actionService.js";
import {
    createReducers
} from "./js/store/reducers.js";
import {
    Store
} from "./js/store/store.js";
//import styles from "./css/TaskList.css";
import {RouteService} from "./js/services/routeService.js";

if(typeof(module.hot) !== 'undefined') {
    module.hot.accept() // eslint-disable-line no-undef
}


const url = 'https://todo-app-back.herokuapp.com';
const requestService = new RequestService(url);
const eventService = new EventService();
const application = document.getElementById('app');

const reducers = createReducers();
const store = new Store({
    reducers,
    eventService
});

const actionService = new ActionServices({
    requestService,
    store
});

window.addEventListener('hashchange ', (e) => {
    alert('hashchange');
});

const router = new RouteService({
    actionService,
    eventService,
    requestService,
    anchor: application,
    state: {
        route: 'todo',
    }
});

window.onpopstate = (state) => console.log(state);

/*
const todoComponent = new TodoComponent({
    eventService,
    actionService,
    anchor: div,
    state: {
        todoView: [{
            title: 'No tasks'
        }],
        countTasks: {all: 0, completed: 0, notCompleted: 0},
    },
});
*/


//const div = document.createElement('div');
//div.appendChild(todoComponent);



/*
const generateId = () => String(Math.round(Date.now() * Math.random()));



const todo1 = new TaskComponent({
    name: 'todo1',
    id: generateId(),
});

const todo2 = document.createElement('my-component-task');
todo2.props = {
    name: 'todo2',
    id: generateId(),
};

div.appendChild(todo1);
div.appendChild(todo2);
*/


/*dataService.getData()
    .then((data) => {
        console.log(data);
    });*/

/*

setTimeout(() => {
    todo2.remove();
}, 3000);
*/
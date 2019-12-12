import {
    counterService
} from "./services/CounterService.js";
import {
    TaskComponent
} from './components/TaskComponent.js';
import {
    EventService
} from "./services/eventService.js";
import {
    TodoComponent
} from "./components/TodoComponent.js";
import {
    RequestService
} from "./services/requestService.js";
import {
    ActionServices
} from "./services/actionService.js";
import {
    createReducers
} from "./store/reducers.js";
import {
    Store
} from "./store/store.js";
//import styles from "./css/TaskList.css";

const url = 'https://jsonplaceholder.typicode.com/todos/';
const requestService = new RequestService(url);
const eventService = new EventService();
const div = document.createElement('div');
document.body.appendChild(div);


const reducers = createReducers();
console.log(reducers)
const store = new Store({
    reducers,
    eventService
});
const actionService = new ActionServices({
    requestService,
    store
});

const todoComponent = new TodoComponent({
    eventService,
    actionService,
    anchor: div,
    state: {
        todoView: [{
            title: 'No tasks'
        }]
    },
});


//const div = document.createElement('div');
div.classList.add('main');


div.appendChild(todoComponent);



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
import {dataService} from "./dataService.js";
import {counterService} from "./CounterService.js";
import {TaskComponent} from './components/TaskComponent.js';
import {TodoComponent} from "./components/TodoComponent.js";
//import styles from "./css/TaskList.css";



const div = document.createElement('div');
div.classList.add('main');
document.body.appendChild(div);
div.appendChild(new TodoComponent());



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


import {TaskComponent} from './components/TaskComponent.js';


const generateId = () => String(Math.round(Date.now() * Math.random()));

const div = document.createElement('div');
div.classList.add('main');
document.body.appendChild(div);

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


setTimeout(() => {
    todo2.remove();
}, 3000);

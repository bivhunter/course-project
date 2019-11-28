import {Task} from './Task.js';
import {TaskComponent} from './TaskComponent.js';

const div = document.createElement('div');
div.classList.add('main');
document.body.appendChild(div);

const task_1 = new TaskComponent(div, {
    task: {
        name: 'todo1'
    }
});

setTimeout(() => {
    task_1.remove();
}, 3000);
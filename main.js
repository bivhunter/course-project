import {Task} from './Task.js';
import {TaskComponent} from './TaskComponent.js';

const div = document.createElement('div');
document.body.appendChild(div);

new TaskComponent(div, {
    task: {
        name: 'todo1'
    }
});
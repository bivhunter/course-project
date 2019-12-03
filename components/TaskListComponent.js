import {TaskComponent} from "./TaskComponent.js";
//import styles from "../css/TaskList.css";
import {eventBus} from "../eventService.js";

const template = document.createElement('template');

template.innerHTML = `
    <style>
    ul{
    list-style-type: none;
    }
</style>
`;

export class TaskListComponent extends HTMLElement {
    constructor(props = {taskList: []}){
        super();
        this._props = props;
        this.onInit();
    }

    onInit() {
        this.attachShadow({mode: 'open'});
        this.addListeners();
    }

    addListeners() {
        eventBus.subscribe('deleteData', (id) => {
           this.removeTask(id);
        });

        eventBus.subscribe('patchData', (id) => {
            this.patchTask(id);
        });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const div = document.createElement('div');
        const ul = document.createElement('ul');

        this._props.taskList.forEach((task) => {
           let li = document.createElement('li');

           let taskComponent = new TaskComponent(task);
           li.appendChild(taskComponent);
           ul.appendChild(li);
        });


        div.appendChild(ul);
        const tmpl = template.content.cloneNode(true);
        tmpl.appendChild(div);
        this.shadowRoot.appendChild(tmpl);

    }

    patchTask(id) {
        this.shadowRoot.querySelector(`my-component-task[data-id="${id}"]`).dataset.completed = "true";
    }


    removeTask(id) {
        this._props.taskList = this._props.taskList.filter((item) => {
            return item.id !== id;
        });

        const tmp = this.shadowRoot.querySelector(`my-component-task[data-id="${id}"]`);
        if(tmp) {
            tmp.parentNode.remove();
        }
    }
}

customElements.define('my-component-task-list', TaskListComponent);
import {TaskComponent} from "./TaskComponent.js";


export class TaskListComponent extends HTMLElement {
    constructor(props = {taskList: []}){
        super();
        this._props = props;
        this.onInit();
    }

    onInit() {
        this.attachShadow({mode: 'open'});
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
        this.shadowRoot.appendChild(div);

    }
}

customElements.define('my-component-task-list', TaskListComponent);
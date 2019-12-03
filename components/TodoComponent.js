import {eventBus} from "../eventService.js";
import {TaskListComponent} from "./TaskListComponent.js";

export class TodoComponent extends HTMLElement{
    constructor(props = {taskList: []}) {
        super();
        this._props = props;
        this.onInit();
    }

    connectedCallback() {

        eventBus.publish('todoConnected');
        eventBus.subscribe('responseSuccessful', (data) => {
            this._props.taskList = data;
            this.render();
        });
    }

    onInit() {


        this.attachShadow({mode: 'open'});
    }

    render() {
        const div = document.createElement('div');
        const taskList = new TaskListComponent(this._props);
        div.appendChild(taskList);
        this.shadowRoot.appendChild(div);
    }

}

customElements.define('my-component-todo', TodoComponent);
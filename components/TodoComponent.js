import {eventBus} from "../eventBus.js";
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
        const taskList = new TaskListComponent(this._props);
        this.shadowRoot.appendChild(taskList);
    }

}

customElements.define('my-component-todo', TodoComponent);
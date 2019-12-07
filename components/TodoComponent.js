import {eventBus} from "../eventService.js";
import {TaskListComponent} from "./TaskListComponent.js";
import {InputComponent} from "./InputComponent.js";

export class TodoComponent extends HTMLElement{
    constructor(props = {taskList: []}) {
        super();
        this._props = props;
        this.onInit();
    }

    connectedCallback() {
        this.render();

        eventBus.publish('todoConnected');
        /*eventBus.subscribe('responseSuccessful', (data) => {
            this._props.taskList = data;
            this.render();
        });*/
    }

    onInit() {


        this.attachShadow({mode: 'open'});
    }

    render() {
        const div = document.createElement('div');
        const taskList = new TaskListComponent();
        const input = new InputComponent();


        div.append(input, taskList);

        this.shadowRoot.appendChild(div);
    }

}

customElements.define('my-component-todo', TodoComponent);
import {eventBus} from "../eventService.js";
import {TaskListComponent} from "./TaskListComponent.js";
import {InputComponent} from "./InputComponent.js";
import {FilterComponent} from "./FilterComponent.js";
import {CounterComponent} from "./CounterComponent.js";

const template = document.createElement('template');

template.innerHTML = `
    <style>
    ul{
    list-style-type: none;
    }
    .left-column{
    margin-left: 0;
        float: left;
        width: 70%;
        outline: blue 1px groove;
    }
    .right-column{
        width: 30%;
        float: right;
        outline: blue 1px groove;
    }
    
</style>
    <div class="left-column"></div>
    <div class="right-column"></div>
`;

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

        const tmpl = template.content.cloneNode(true);
        const leftColumn = tmpl.querySelector('.left-column');
        const rightColumn = tmpl.querySelector('.right-column');

        const taskList = new TaskListComponent();
        const input = new InputComponent();
        const filter = new FilterComponent();
        const counter = new CounterComponent();


        leftColumn.append(input, filter, taskList);
        rightColumn.appendChild(counter);

        this.shadowRoot.appendChild(tmpl);
    }

}

customElements.define('my-component-todo', TodoComponent);
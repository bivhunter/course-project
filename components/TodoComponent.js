import {eventBus} from "../services/eventService.js";
import {TaskListComponent} from "./TaskListComponent.js";
import {InputComponent} from "./InputComponent.js";
import {FilterComponent} from "./FilterComponent.js";
import {CounterComponent} from "./CounterComponent.js";
import {Component} from "./Component.js";

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

export class TodoComponent extends Component{
    constructor(props) {
        super(props);
        //this.eventService = props.eventService;
        //this.actionService = props.actionService;
        console.log(template, 'todo constructor')
        this.template = template;
       // this.onInit();
    }

   /* connectedCallback() {
        this.render();

        /!*eventBus.publish('todoConnected');
        eventBus.subscribe('responseSuccessful', (data) => {
            this._props.taskList = data;
            this.render();
        });*!/
    }*/

    onInit() {
        this.eventService.subscribe('stateChanged', (state) => {
            this.taskList.props = {
                ...this.taskList.props,
                taskList: state.todoView
            };
            console.log(this.taskList);
        });
    }

    render() {

        const leftColumn = this.shadowRoot.querySelector('.left-column');
        const rightColumn = this.shadowRoot.querySelector('.right-column');
        console.log(this.shadowRoot)
        this.taskList = new TaskListComponent({...this.props, anchor: leftColumn});
        const input = new InputComponent({actionService: this.actionService});
        const filter = new FilterComponent({actionService: this.actionService});
        const counter = new CounterComponent({actionService: this.actionService});



        leftColumn.append(input, filter, taskList);
        rightColumn.appendChild(counter);

    }

}

customElements.define('my-component-todo', TodoComponent);
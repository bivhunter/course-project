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
    <div class="header"><h1>Todo Application</h1></div>
    <div class="left-column">
        <div class="input-wrapper"></div>
        <div class="filter-wrapper"></div>
        <div class="todo-list-wrapper"></div>
    </div>
    <div class="right-column"></div>
`;

export class TodoComponent extends Component{
    constructor(props) {
        super(props);
    }

    set state(value) {
        this._state = {...value};
        this.props.state = this._state;
    }

    onInit() {
        this.template = template;
        this.render();
    }


    connectedCallback() {
      // addEventListener();
    }

    render() {
        this.anchor.appendChild(this);
       // const leftColumn = this.shadowRoot.querySelector('.left-column');
        const rightColumn = this.shadowRoot.querySelector('.right-column');
        const todoListWrapper = this.shadowRoot.querySelector('.todo-list-wrapper');
        const inputWrapper = this.shadowRoot.querySelector('.input-wrapper');
        const filterWrapper = this.shadowRoot.querySelector('.filter-wrapper');
        //console.log(this.shadowRoot);

        const input = new InputComponent({...this.props, anchor: inputWrapper});
        this.taskList = new TaskListComponent({...this.props, anchor: todoListWrapper});
        this.filter = new FilterComponent( { ...this.props, anchor: filterWrapper } );
        //this.counter = new CounterComponent({...this.props, anchor: rightColumn});

        this.addListeners();
    }



    addListeners(){
        this.eventService.subscribe('stateChanged', (state) => {
            this.state = state;
            //console.log(state)
            this.sendState([
                this.taskList,
                //this.filter,
                //this.counter,
            ], state);
        });
    }

}

customElements.define('my-component-todo', TodoComponent);
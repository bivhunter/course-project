import {ButtonComponent} from "./ButtonComponent.js";
import {Component} from "./Component.js";
import {eventBus} from "../services/eventService.js";

const template = document.createElement('template');

template.innerHTML = `
    <style>
        input{
            width: 80%;
        }
        button {
            width: 20%;
        }
    </style>
    
    <div>
        <input type="text">
    </div>
`;

export class InputComponent extends Component{
    constructor(props) {
        super(props);
    }

    onInit() {
        this.template = template;
       this.render();
    }

    connectedCallback() {
     //  this.addListeners();
    }

    addListeners() {
        this.button.addEventListener('click', (event) => {
            this.addTask();
        });

        this.input.addEventListener('keydown', (event) => {
            if (event.key === "Enter") {
                this.addTask();
            }

        });
    }
  
    addTask() {
        if(!this.input.value) {
            return;
        }
        this.props.actionService.dispatch('addTask', this.input.value);
        //eventBus.publish('addTask', this.input.value );
        this.input.value = '';
    }

    render() {
        console.log('render')
        this.anchor.appendChild(this);
        this.input = this.shadowRoot.querySelector('input');
        const div = this.shadowRoot.querySelector('div');
        this.button = new ButtonComponent({ title: 'Add task', anchor: div, classStyle: 'add-button' });

        this.addListeners();
    }
}

customElements.define('my-component-input', InputComponent);
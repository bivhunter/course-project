import {actionService} from "../services/actionService.js";
import {ButtonComponent} from "./ButtonComponent.js";
import {Component} from "./Component.js";
import {inputTemplate} from "../templates/input-template.js";


export class InputComponent extends Component{
    constructor(props) {
        super(props);
    }

    onInit() {
        this.template = inputTemplate;
       this.render();
    }

    connectedCallback() {
     //  this.addListeners();
    }

    addListeners() {
        this.button.addEventListener('click', (event) => {
            this.addTask();
        });

        this.textarea.addEventListener('keydown', (event) => {
            if (event.key === "Enter") {
                this.addTask();
            }

        });
    }
  
    addTask() {
        if(!this.textarea.value) {
            return;
        }
        actionService.dispatch('addTask', this.textarea.value);
        //eventBus.publish('addTask', this.textarea.value );
        this.textarea.value = '';
    }

    render() {
        this.anchor.appendChild(this);
        this.textarea = this.shadowRoot.querySelector('textarea');
        const buttonWrapper = this.shadowRoot.querySelector('.right-column');
        this.button = new ButtonComponent({ title: 'Add task', anchor: buttonWrapper, classStyle: 'add-button' });

        this.addListeners();
    }
}

customElements.define('my-component-input', InputComponent);
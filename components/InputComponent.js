import {ButtonComponent} from "./ButtonComponent.js";
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

export class InputComponent extends HTMLElement{
    constructor(props) {
        super();
        this.props = props;
    }

    connectedCallback() {
        this.onInit();
        this.render();
    }

    onInit() {
        this.attachShadow({mode : 'open'});
        this.addListeners();
    }

    addListeners() {

    }

    addButtonListeners() {
        this._button.addEventListener('click', (event) => {
           this.addTask();
        });

        this._input.addEventListener('keydown', (event) => {
            console.log(event.key);
            if (event.key === "Enter") {
                this.addTask();
            }

        });
    }

    addTask() {
        this.props.actionService.dispatch('addTask', this._input.value);
        //eventBus.publish('addTask', this._input.value );
        this._input.value = '';
    }

    render() {
        const tmpl = template.content.cloneNode(true);
        this._input = tmpl.querySelector('input');
        //ocus();
        const div = tmpl.querySelector('div');

        this._button = new ButtonComponent({
            title: 'Add task'
        });
        this.addButtonListeners();


        div.appendChild(this._button);
        this.shadowRoot.appendChild(tmpl);
    }
}

customElements.define('my-component-input', InputComponent);
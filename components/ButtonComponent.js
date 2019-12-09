import {eventBus} from "../eventService.js";
import {Component} from "./Component.js";
const template = document.createElement('template');

template.innerHTML = `
    <style>
        @import './css/button-component.css';
    </style>
`;


export class ButtonComponent extends Component{
    constructor(props = {}) {
        super(props);
        this.template = template;
    }

    onInit() {
        this.setDataAttribute();
        const button = document.createElement('button');
        button.classList.add(this.props.classStyle);
        button.textContent = this.props.title;
        this.button = button;
    }

    addListeners(){}

    setDataAttribute() {
        this.dataset.title = this.props.title;
    }

    render() {
        this.shadowRoot.append(this.button);
    }
}

customElements.define("my-component-button", ButtonComponent);
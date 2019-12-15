import {eventBus} from "../services/eventService.js";
import {Component} from "./Component.js";
const template = document.createElement('template');

template.innerHTML = `
    <style>
        @import './css/button-component.css';
    </style>
`;


export class ButtonComponent extends Component{
    constructor(props) {
        super(props);
    }

    onInit() {
        this.template = template;
        this.render();
        this.setDataAttribute();
    }

    addListeners(){}

    setDataAttribute() {
        this.dataset.title = this.props.title;
    }

    render() {
        this.anchor.appendChild(this);
        const button = document.createElement('button');
        //console.log(this.props)
        button.classList.add(this.props.classStyle);
        button.textContent = this.props.title;
        this.shadowRoot.appendChild(button);

    }
}

customElements.define("my-component-button", ButtonComponent);
import { Component } from "./Component.js";
import { buttonTemplate } from "../templates/button-template.js";

export class ButtonComponent extends Component {
    constructor(props) {
        super(props);
    }

    onInit() {
        this.template = buttonTemplate;
        this.render();
        this.setDataAttribute();
    }

    setDataAttribute() {
        this.dataset.text = this.props.title;
    }

    render() {
        this.anchor.appendChild(this);
        const button = this.shadowRoot.querySelector('button');
        button.classList.add(this.props.classStyle);
        button.textContent = this.props.title;
    }
}

customElements.define("my-component-button", ButtonComponent);
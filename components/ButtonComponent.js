import {eventBus} from "../eventService.js";

export class ButtonComponent extends HTMLElement{
    constructor(props = {}) {
        super();
        this.props = props;
        this.attachShadow({mode: "open"});
    }

    set props(value) {
        this._props = value;
        this.dataset.title = this.props.title;
    }

    get props() {
        return this._props;
    }

 /*   static get observedAttributes() {
        return ['data-title'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if(this.button) {
            this.button.textContent = newValue;
        }
    }
*/
    connectedCallback() {
        this.onInit();
        this.render();
    }

    disconnectedCallback() {

    }

    onInit() {

    }

    render() {
        const button = document.createElement('button');
        button.textContent = this.props.title;
        this.shadowRoot.appendChild(button);
        this.button = button;
    }

}

customElements.define("my-component-button", ButtonComponent);
import {eventBus} from "../eventService.js";

export class ButtonComponent extends HTMLElement{
    constructor(props) {
        super();
        this.props = props;
        this.attachShadow({mode: "open"});
    }

    set props(value) {
        this._props = value;
    }

    get props() {
        return this._props;
    }



    connectedCallback() {
        this.onInit();
        this.render();
    }

    disconnectedCallback() {

    }

    onInit() {
        this.dataset.id = this.props.id;
        this.addListeners();
    }

    addListeners() {
        this.addEventListener('click', (event) => {
            eventBus.publish(`${this._props.name.toLowerCase()}Task`, this.props.id);
        });
    }

    renderButton(){

    }

    render() {
        const button = document.createElement('button');
        button.textContent = this.props.name;
        this.shadowRoot.appendChild(button);
    }

    remove() {
        //this._elem.remove();
    }


}

customElements.define("my-component-button", ButtonComponent);
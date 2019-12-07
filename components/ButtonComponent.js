import {eventBus} from "../eventService.js";
const template = document.createElement('template');

template.innerHTML = `
    
`;


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

    getStyle() {
        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('type', 'text/css');
        linkElem.setAttribute('href', './css/button-component.css');
        this.linkElem = linkElem;
    }

    disconnectedCallback() {

    }

    onInit() {
        this.getStyle();
    }

    render() {
        const tmpl = template.content.cloneNode(true);
        const button = document.createElement('button');
        button.classList.add(this.props.classStyle);
        button.textContent = this.props.title;
        tmpl.append(button);
        this.shadowRoot.appendChild(this.linkElem);
        //console.log(this.shadowRoot);
        this.shadowRoot.append(tmpl);
        this.button = button;
    }

}

customElements.define("my-component-button", ButtonComponent);
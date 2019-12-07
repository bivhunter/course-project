import {ButtonComponent} from "./ButtonComponent.js";
import {eventBus} from "../eventService.js";

const template = document.createElement('template');
template.innerHTML = `
<style>
    div:hover {
        background: silver;
    }
    
    :host([data-completed="true"]) {
      background: aquamarine; 
      display: block;
      border: 1px solid red;
    }
    
</style>
        <div>
        <p></p>
</div>    
    `;

export class TaskComponent extends HTMLElement{
    constructor(props = {
        id: '',
        title: 'New task'
    }) {
        super();
        this.props = props;
        this.attachShadow({mode: "open"});
    }

    set props(value) {
        this._props = value;
        this.setDataAttribute()
    }

    setDataAttribute(){
        this.dataset.id = this._props.id;
        this.dataset.completed = this._props.completed;
    }

    get props() {
        return this._props;
    }

   /* static get observedAttributes(){
        return ['data-completed'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if(this._todoButton) {
            this._todoButton.dataset.title = (newValue === "true") ? 'no Todo' : "Todo";
        }
    }*/

    connectedCallback() {
       this.onInit();
       this.render();
    }

    onInit() {
        this.addListeners();
    }

    addListeners() {
        this.addEventListener('mouseover', () => {
            this.renderButton();
            this.addButtonListeners();
        });

        this.addEventListener('mouseout', this.removeButton.bind(this));
        this.addEventListener('click', (event) => {
          //  this.clickListener(event);
        });

    }

    clickListener(event) {
        console.log(event.composedPath());
        if(event.target.tagName !== "MY-COMPONENT-TASK") {
            return;
        }
        console.log('click', event.target);
    }

    addButtonListeners() {
        this._deleteButton.addEventListener('click', (event) => {
            eventBus.publish(`deletedTask`, this.props.id);
        });

        this._todoButton.addEventListener('click', (event) => {
            eventBus.publish(`todoTask`, this.props);
        });
    }

    removeButton() {
        this.wrapper.removeChild(this._deleteButton);
        this.wrapper.removeChild(this._todoButton);
    }

    renderButton(){
        this._deleteButton = new ButtonComponent({ title: 'Delete'});
        const title = (this.dataset.completed === 'true') ? 'Not Todo' : 'Todo';
        this._todoButton = new ButtonComponent({ title: title });

        this.wrapper.appendChild(this._todoButton);
        this.wrapper.appendChild(this._deleteButton);
    }

    render() {
        const temp = template.content.cloneNode(true);

        temp.querySelector('p').textContent = this._props.title;
        this.shadowRoot.appendChild(temp);
       /* if(this._anchor) {
            console.log(this._anchor);
            this._anchor.appendChild(this);
        }*/
        this.wrapper = this.shadowRoot.querySelector('div');

    }
}

customElements.define("my-component-task", TaskComponent);
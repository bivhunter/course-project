import {ButtonComponent} from "./ButtonComponent.js";
import {eventBus} from "../eventService.js";

const template = document.createElement('template');
template.innerHTML = `
<style>
    div:hover {
        background: silver;
    }
    [data-completed="true"] {
        background: aquamarine;    
    }
</style>
        <div>
        <p></p>
</div>    
    `;

export class TaskComponent extends HTMLElement{
    constructor(props = {
        id: '',
        name: 'New task'
    }) {
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

    static get observedAttributes(){
        return ['data-completed'];
    }

    connectedCallback() {
       this.onInit();
       this.render();
    }

    get


    disconnectedCallback() {
       // console.log('task delete');
    }

    onInit() {
        this.dataset.id = this._props.id;

        this.addListeners();
    }

    addListeners() {
        this.addEventListener('mouseover', this.renderButton.bind(this));
        this.addEventListener('mouseout', this.removeButton.bind(this));

        eventBus.subscribe('patchData', (id) => {
            if(id === this._props.id) {
                this.wrapper.dataset.completed = "true";
                this._props.completed = true;
            }
        });
    }

    removeButton() {
        //console.dir(this._deleteButton);
        this.wrapper.removeChild(this._deleteButton);
        this.wrapper.removeChild(this._todoButton);
    }

    renderButton(){
        console.log('everenderButtonnt');
        this._deleteButton = new ButtonComponent(
            {
                id: this.props.id,
                name: 'Delete'
            }
        );

        this._todoButton = new ButtonComponent(
            {
                id: this.props.id,
                name: 'Todo'
            }
        );

        //this.wrapper.style.backgroundColor = "grey";
        this.wrapper.appendChild(this._todoButton);
        this.wrapper.appendChild(this._deleteButton);
    }

    render() {
        const temp = template.content.cloneNode(true);

        temp.querySelector('p').textContent = this._props.name;
        this.shadowRoot.appendChild(temp);
        if(this._anchor) {
            console.log(this._anchor);
            this._anchor.appendChild(this);
        }
        this.wrapper = this.shadowRoot.querySelector('div');
        this.wrapper.dataset.completed = this._props.completed;
    }
}

customElements.define("my-component-task", TaskComponent);
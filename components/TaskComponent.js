import {ButtonComponent} from "./ButtonComponent.js";

const template = document.createElement('template');
template.innerHTML = `
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

    connectedCallback() {
       this.onInit();
       this.render();
    }

    disconnectedCallback() {
        // браузер вызывает этот метод при удалении элемента из документа
        // (может вызываться много раз, если элемент многократно добавляется/удаляется)
    }

    onInit() {
        this.dataset.id = this._props.id;
        this.addListeners();
    }

    addListeners() {
        this.addEventListener('mouseover', this.renderButton.bind(this));
        this.addEventListener('mouseout', this.removeButton.bind(this));
    }

    removeButton() {
        console.dir(this._deleteButton);
        this.shadowRoot.querySelector('div').removeChild(this._deleteButton);
        this.shadowRoot.querySelector('div').removeChild(this._doneButton);
    }

    renderButton(){
        console.log('everenderButtonnt');
        this._deleteButton = new ButtonComponent(
            {
                id: this.props.id,
                name: 'Delete'
            }
        );

        this._doneButton = new ButtonComponent(
            {
                id: this.props.id,
                name: 'Done'
            }
        );

        this.shadowRoot.querySelector('div').style.backgroundColor = "grey";
        this.shadowRoot.querySelector('div').appendChild(this._doneButton);
        this.shadowRoot.querySelector('div').appendChild(this._deleteButton);
    }

    render() {
        const temp = template.content.cloneNode(true);

        temp.querySelector('p').textContent = this._props.name;
        this.shadowRoot.appendChild(temp);
        if(this._anchor) {
            console.log(this._anchor);
            this._anchor.appendChild(this);
        }
    }
}

customElements.define("my-component-task", TaskComponent);
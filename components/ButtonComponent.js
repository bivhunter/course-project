
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
        console.log('disconect elem')
    }

    onInit() {
        this.dataset.id = this.props.id;
    }

    addListeners() {
       /* this.addEventListener('mouseOver', (event) => {
            this.renderButton.bind(this);
        });*/
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
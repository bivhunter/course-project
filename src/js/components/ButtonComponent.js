
import {
    Component
} from "./Component.js";
import {
    buttonTemplate
} from "../templates/button-template.js";



export class ButtonComponent extends Component {
    constructor(props) {
        super(props);
    }

    onInit() {
        this.template = buttonTemplate;
        this.render();
        this.setDataAttribute();
    }

    addListeners() {}

    setDataAttribute() {
        this.dataset.text = this.props.title;
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
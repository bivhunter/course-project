
import {ButtonComponent} from "./ButtonComponent.js";
import {eventBus} from "../eventService.js";
///import {TaskComponent} from "./TaskComponent";

const template = document.createElement('template');
template.innerHTML = `
<style>
    div {
        outline: blue 1px groove;
    }
</style>
        <div>
        <textarea autofocus></textarea>
</div>    
    `;

export class TextAreaComponent extends HTMLElement{
    constructor(props) {
        super();
        this.props = props;
    }

    connectedCallback() {
        this.onInit();
        this.render();
        this.renderButton();
    }

    onInit() {
        this.attachShadow({mode: 'open'});
       //this.addListeners();
    }

    render() {
        const temp = template.content.cloneNode(true);
        this.textarea = temp.querySelector('textarea');
        this.textarea.value = this.props.title;

        this.shadowRoot.appendChild(temp);
        /* if(this._anchor) {
             console.log(this._anchor);
             this._anchor.appendChild(this);
         }*/
        this.wrapper = this.shadowRoot.querySelector('div');
    }

    addButtonListeners() {
        this._saveButton.addEventListener('click', (event) => {
            console.dir('click save button');
            this.props.title = this.textarea.value;
            eventBus.publish(`changeTask`, this.props);
        });

        this._cancelButton.addEventListener('click', (event) => {
            eventBus.publish(`cancelEditing`, this.props);
        });

        this.wrapper.addEventListener('mouseleave', (e) => {
            if(e.target.tagName !== "DIV") {
                return;
            }
           //console.log('mouseleave', e.target);
            eventBus.publish(`cancelEditing`, this.props);
        }, true);
    }

    renderButton(){
        this._saveButton = new ButtonComponent({ title: 'Save'});
        this._cancelButton = new ButtonComponent({ title: 'cancel' });
        this.wrapper.appendChild(this._saveButton);
        this.wrapper.appendChild(this._cancelButton);
        this.addButtonListeners();
    }

}

customElements.define("my-component-textarea", TextAreaComponent);
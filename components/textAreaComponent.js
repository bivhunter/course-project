import {
    Component
} from "./Component.js";
import {
    ButtonComponent
} from "./ButtonComponent.js";
import {
    eventBus
} from "../services/eventService.js";
///import {TaskComponent} from "./TaskComponent";

const template = document.createElement('template');
template.innerHTML = `
<style>
   @import "./css/textarea-component.css";
</style>
        <div class="left-column">
            <textarea ></textarea>
        </div>
        <div class="right-column">
             <table>
                <tr><td class="save-button-wrapper"></td></tr>
                <tr><td class="cancel-button-wrapper"></td></tr>
             </table>
        </div>    
    `;

export class TextAreaComponent extends Component {
    constructor(props) {
        super(props);
        this.template = template;
        this.initElements();
    }

    onInit() {

    }

    focus() {
        this.textarea.focus();
    }

    addListeners() {
        this.addEventListener('mouseleave', (e) => {
            if (e.target.tagName !== this.tagName) {
                return;
            }
            eventBus.publish(`cancelEditing`, this.props.task);
        }, true);

        this.textarea.addEventListener('keydown', (event) => {
            // console.log(event.key);
            if (event.key === "Enter") {
                event.preventDefault();
                this.saveTask();
            }

        });
    }

    initElements() {
        this.textarea = this.shadowRoot.querySelector('textarea');
        this.textarea.value = this.props.task.title;
        this.dataset.completed = this.props.task.completed;
    }

    render() {
        this.saveButtonWrapper = this.shadowRoot.querySelector('.save-button-wrapper');
        this.cancelButtonWrapper = this.shadowRoot.querySelector('.cancel-button-wrapper');
        this.renderButton();
    }

    renderButton() {
        this.saveButton = new ButtonComponent({
            title: 'Save',
            classStyle: 'save-button'
        });
        this.cancelButton = new ButtonComponent({
            title: 'Cancel',
            classStyle: 'cancel-button'
        });
        this.saveButtonWrapper.appendChild(this.saveButton);
        this.cancelButtonWrapper.appendChild(this.cancelButton);
        this.addButtonListeners();
    }

    addButtonListeners() {
        this.saveButton.addEventListener('click', (event) => {
            this.saveTask();
        });

        this.cancelButton.addEventListener('click', (event) => {
            eventBus.publish(`cancelEditing`, this.props.task);
        });


    }

    saveTask() {
        this.props.task.title = this.textarea.value;
        eventBus.publish(`changeTask`, this.props.task);

    }



}

customElements.define("my-component-textarea", TextAreaComponent);
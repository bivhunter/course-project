import { Component} from "./Component.js";
import { ButtonComponent } from "./ButtonComponent.js";
import {textareaTemplate} from "../templates/textarea-template.js";

export class TextAreaComponent extends Component {
    constructor(props) {
        super(props);
    }

    onInit() {
        this.template = textareaTemplate;
        this.render();
        this.setDataAttribute();
    }

    setDataAttribute(){
        this.dataset.id = this.props.task.id;
        this.dataset.completed = this.props.task.completed;
    }

    render() {
        this.anchor.appendChild(this);
        this.textarea = this.shadowRoot.querySelector('textarea');
        this.textarea.value = this.props.task.title;

        setTimeout(() => {
            this.textarea.focus();
        }, 0);

        this.saveButtonWrapper = this.shadowRoot.querySelector('.save-button-wrapper');
        this.cancelButtonWrapper = this.shadowRoot.querySelector('.cancel-button-wrapper');
        this.renderButton();
        this.addButtonListeners();
        this.addListeners();
    }

    renderButton() {
        this.saveButton = new ButtonComponent({
            title: 'Save',
            classStyle: 'save-button',
            anchor: this.saveButtonWrapper
        });
        this.cancelButton = new ButtonComponent({
            title: 'Cancel',
            classStyle: 'cancel-button',
            anchor: this.cancelButtonWrapper
        });

    }

    addListeners() {
        this.addEventListener('mouseleave', (e) => {
            this.actionService.dispatch(`endEditTask`, this.props.task);
        });

        this.textarea.addEventListener('keydown', (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
                this.actionService.dispatch(`endEditTask`,
                    {...this.props.task, title: this.textarea.value});
            }

        });
    }

    addButtonListeners() {
        this.saveButton.addEventListener('click', (event) => {
            this.actionService.dispatch(`endEditTask`,
                {...this.props.task, title: this.textarea.value});
        });

        this.cancelButton.addEventListener('click', (event) => {
            this.actionService.dispatch(`endEditTask`, this.props.task);
        });
    }
}

customElements.define("my-component-textarea", TextAreaComponent);
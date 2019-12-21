import {actionService} from "../services/ActionService.js";
import {
    ButtonComponent
} from "./ButtonComponent.js";
import {
    Component
} from "./Component.js";
import {
    taskTemplate
} from "../templates/task-template.js";

export class TaskComponent extends Component {
    constructor(props = {}) {
        super(props);

    }

    onInit() {
        this.template = taskTemplate;
        this.render();
        this.setDataAttribute();
    }

    setDataAttribute() {
        this.dataset._id = this.props.task._id;
        this.dataset.completed = this.props.task.completed;
    }

    addListeners() {
        this.addEventListener('mouseover', () => {
            this.renderButton();
            this.addButtonListeners();
        });

        this.addEventListener('mouseout', this.removeButton.bind(this));
        this.addEventListener('click', (event) => {
            return this.clickListener(event);
        });
    }

    clickListener(event) {

        if(event.composedPath()[0].tagName === "BUTTON") {
            return;
        }
        actionService.dispatch(`startEditTask`, this.props.task);
    }

    addButtonListeners() {
        this.deleteButton.addEventListener('click', (event) => {
            console.log(this.props)
            actionService.dispatch(`deletedTask`, this.props.task._id);
        });

        this.doneButton.addEventListener('click', (event) => {
            actionService.dispatch(`doneTask`, this.props.task);
        });
    }

    removeButton() {
        this.deleteButtonWrapper.removeChild(this.deleteButton);
        this.doneButtonWrapper.removeChild(this.doneButton);
    }

    render() {
        this.anchor.appendChild(this);
        this.shadowRoot.querySelector('p').textContent = this.props.task.text;

        this.addListeners();

        // this.leftColumn = this.shadowRoot.querySelector('.left-column');


    }

    renderButton() {
        this.doneButtonWrapper = this.shadowRoot.querySelector('.done-button-wrapper');
        this.deleteButtonWrapper = this.shadowRoot.querySelector('.delete-button-wrapper');

        this.deleteButton = new ButtonComponent({
            title: 'Delete',
            classStyle: "delete-button",
            anchor: this.deleteButtonWrapper
        });

        if (this.props.task.completed) {
            this.doneButton = new ButtonComponent({
                title: 'Not todo',
                classStyle: 'not-todo-button',
                anchor: this.doneButtonWrapper
            });
        } else {
            this.doneButton = new ButtonComponent({
                title: 'Todo',
                classStyle: 'todo-button',
                anchor: this.doneButtonWrapper
            });
        }

    }
}

customElements.define("my-component-task", TaskComponent);
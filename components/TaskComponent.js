import {ButtonComponent} from "./ButtonComponent.js";
import {eventBus} from "../services/eventService.js";
import {Component} from "./Component.js";

const template = document.createElement('template');
template.innerHTML = `
        <style>
            @import './css/task-component.css';
        </style>
        <div class="left-column">
            <p></p>
        </div>
            <div class="right-column">
                <table>
                    <tr><td class="done-button-wrapper"></td></tr>
                    <tr><td class="delete-button-wrapper"></td></tr>
                </table>
            </div>
    `;

export class TaskComponent extends Component{
    constructor(props = {}) {
        super(props);
        this.template = template;
    }

    onInit() {
        this.setDataAttribute();
    }

    setDataAttribute(){
        this.dataset.id = this.props.task.id;
        this.dataset.completed = this.props.task.completed;
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
        this.deleteButton.addEventListener('click', (event) => {
            eventBus.publish(`deletedTask`, this.props.task.id);
        });

        this.doneButton.addEventListener('click', (event) => {
            eventBus.publish(`todoTask`, this.props.task);
        });
    }

    removeButton() {
        this.deleteButtonWrapper.removeChild(this.deleteButton);
        this.doneButtonWrapper.removeChild(this.doneButton);
    }

    render() {
        this.shadowRoot.querySelector('p').textContent = this.props.task.title;

       // this.leftColumn = this.shadowRoot.querySelector('.left-column');
        this.doneButtonWrapper = this.shadowRoot.querySelector('.done-button-wrapper');
        this.deleteButtonWrapper = this.shadowRoot.querySelector('.delete-button-wrapper');
        this.shadowRoot.appendChild(this.template);
    }

    renderButton(){
        this.deleteButton = new ButtonComponent({ title: 'Delete', classStyle: "delete-button"});

        if(this.props.task.completed) {
            this.doneButton = new ButtonComponent({ title: 'Not todo', classStyle: 'not-todo-button' });
        } else {
            this.doneButton = new ButtonComponent({ title: 'Todo', classStyle: 'todo-button' });
        }

        this.doneButtonWrapper.appendChild(this.doneButton);
        this.deleteButtonWrapper.appendChild(this.deleteButton);
    }
}

customElements.define("my-component-task", TaskComponent);
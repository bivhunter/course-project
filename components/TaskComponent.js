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

    }

    onInit() {
        this.template = template;
        this.render();
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
            return this.clickListener(event);
        });
    }

    clickListener(event) {

        if(event.composedPath()[0].tagName === "BUTTON") {
            return;
        }
       //console.log(event.composedPath())
        this.actionService.dispatch(`startEditTask`, this.props.task);
    }

    addButtonListeners() {
        this.deleteButton.addEventListener('click', (event) => {
            console.log(this.props)
            this.actionService.dispatch(`deletedTask`, this.props.task.id);
        });

        this.doneButton.addEventListener('click', (event) => {
            this.actionService.dispatch(`doneTask`, this.props.task);
        });
    }

    removeButton() {
        this.deleteButtonWrapper.removeChild(this.deleteButton);
        this.doneButtonWrapper.removeChild(this.doneButton);
    }

    render() {
        this.anchor.appendChild(this);
        this.shadowRoot.querySelector('p').textContent = this.props.task.title;

        this.addListeners();

       // this.leftColumn = this.shadowRoot.querySelector('.left-column');


    }

    renderButton(){
        this.doneButtonWrapper = this.shadowRoot.querySelector('.done-button-wrapper');
        this.deleteButtonWrapper = this.shadowRoot.querySelector('.delete-button-wrapper');

        this.deleteButton = new ButtonComponent({
            title: 'Delete',
            classStyle: "delete-button",
            anchor: this.deleteButtonWrapper
        });

        if(this.props.task.completed) {
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
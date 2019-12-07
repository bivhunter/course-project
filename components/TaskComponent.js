import {ButtonComponent} from "./ButtonComponent.js";
import {eventBus} from "../eventService.js";
import {Component} from "./Component.js";

const template = document.createElement('template');
template.innerHTML = `
        <div class="left-column">
            <p></p>
        </div>
        <div class="right-column">
        <table>
        <tr><td class="done-button"></td></tr>
        <tr><td class="delete-button"></td></tr>
        </table>
</div></div>    
    `;

export class TaskComponent extends Component{
    constructor(props = {}) {
        super(props);
    }

    onInit() {
        this.template = template;
        this.style = './css/task-component.css';
        this.setDataAttribute();
    }

    setDataAttribute(){
        this.dataset.id = this._props.id;
        this.dataset.completed = this._props.completed;
    }

   /* static get observedAttributes(){
        return ['data-completed'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if(this._todoButton) {
            this._todoButton.dataset.title = (newValue === "true") ? 'no Todo' : "Todo";
        }
    }*/

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
        this._deleteButton.addEventListener('click', (event) => {
            eventBus.publish(`deletedTask`, this.props.id);
        });

        this._todoButton.addEventListener('click', (event) => {
            eventBus.publish(`todoTask`, this.props);
        });
    }

    removeButton() {
        this.deleteButton.removeChild(this._deleteButton);
        this.doneButton.removeChild(this._todoButton);
    }

    render() {
        this.template.querySelector('p').textContent = this._props.title;

        this.leftColumn = this.template.querySelector('.left-column');
        this.doneButton = this.template.querySelector('.done-button');
        this.deleteButton = this.template.querySelector('.delete-button');
    }

    renderButton(){
        this._deleteButton = new ButtonComponent({ title: 'Delete', classStyle: "red"});

        if(this.props.completed === 'true') {
            this._todoButton = new ButtonComponent({ title: 'Not todo', classStyle: 'blue' });
        } else {
            this._todoButton = new ButtonComponent({ title: 'Todo', classStyle: 'green' });
        }

        this.doneButton.appendChild(this._todoButton);
        this.deleteButton.appendChild(this._deleteButton);
    }
}

customElements.define("my-component-task", TaskComponent);
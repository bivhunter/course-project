
import {ButtonComponent} from "./ButtonComponent.js";
import {eventBus} from "../services/eventService.js";

const template = document.createElement('template');
template.innerHTML = `
<style>
    div {
        outline: blue 1px groove;
    }
</style>
        <div>
        
</div>    
    `;

export class FilterComponent extends HTMLElement {
    constructor( props ) {
        super();
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
        this.shadowRoot.appendChild(temp);
        this.wrapper = this.shadowRoot.querySelector('div');
    }

    renderButton(){
        this._allTasks = new ButtonComponent({ title: 'All'});
        this._doneTasks = new ButtonComponent({ title: 'Done' });
        this._notDoneTasks = new ButtonComponent({ title: 'Not Done' });
        this.wrapper.appendChild(this._allTasks);
        this.wrapper.appendChild(this._doneTasks);
        this.wrapper.appendChild(this._notDoneTasks);
        this.addButtonListeners();
    }

    addButtonListeners() {
        this._allTasks.addEventListener('click', (event) => {
            eventBus.publish(`allFilter`, this.props);
        });

        this._doneTasks.addEventListener('click', (event) => {
            eventBus.publish(`doneFilter`, this.props);
        });

        this._notDoneTasks.addEventListener('click', (event) => {
            eventBus.publish(`notDoneFilter`, this.props);
        });

    }


}

customElements.define("my-component-filter", FilterComponent);
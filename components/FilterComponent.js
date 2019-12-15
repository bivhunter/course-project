import {Component} from "./Component.js";
import {ButtonComponent} from "./ButtonComponent.js";
import {eventBus} from "../services/eventService.js";
import {filterTemplate} from "../templates/filter-template.js";

export class FilterComponent extends Component {
    constructor( props ) {
        super(props);
    }

    connectedCallback() {

    }

    onInit() {
        this.template = filterTemplate;
        this.render();
        //this.addListeners();
    }

    render() {
        this.anchor.appendChild(this);
        this.allButtonWrapper = this.shadowRoot.querySelector('.all-wrapper');
        this.doneButtonWrapper = this.shadowRoot.querySelector('.done-wrapper');
        this.notDoneButtonWrapper = this.shadowRoot.querySelector('.not-done-wrapper');

        this.allTasks = new ButtonComponent({
            title: 'All',
            classStyle: "all-filter-button",
            anchor: this.allButtonWrapper
        });

        this.doneTasks = new ButtonComponent({
            title: 'Done',
            classStyle: "done-filter-button",
            anchor: this.doneButtonWrapper
        });

        this.notDoneTasks = new ButtonComponent({
            title: 'Not Done',
            classStyle: "not-done-filter-button",
            anchor: this.notDoneButtonWrapper
        });
        this.addButtonListeners();
    }

    addButtonListeners() {
        this.allTasks.addEventListener('click', (event) => {
            this.actionService.dispatch(`allFilter`, this.props);
        });

        this.doneTasks.addEventListener('click', (event) => {
            this.actionService.dispatch(`doneFilter`, this.props);
        });

        this.notDoneTasks.addEventListener('click', (event) => {
            this.actionService.dispatch(`notDoneFilter`, this.props);
        });

    }


}

customElements.define("my-component-filter", FilterComponent);
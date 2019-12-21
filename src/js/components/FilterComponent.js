import {actionService} from "../services/ActionService.js";
import {Component} from "./Component.js";
import {ButtonComponent} from "./ButtonComponent.js";
import {filterTemplate} from "../templates/filter-template.js";

export class FilterComponent extends Component {
    constructor( props ) {
        super(props);
    }

    onInit() {
        this.template = filterTemplate;
        this.render();
        this.applyChanges();
        //this.addListeners();
    }

    set state(value) {
        this.props.state = {...value};
        this.applyChanges();
    }

    get state() {
        return this._state;
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

    applyChanges() {
        [this.allButtonWrapper, this.doneButtonWrapper, this.notDoneButtonWrapper]
            .forEach((item) => {
                item.dataset.select = "";
            });
        switch (this.props.state.filterMethod) {
            case 'allTasks':
                this.allButtonWrapper.dataset.select = "selected";
                break;
            case 'doneTasks':
                this.doneButtonWrapper.dataset.select = "selected";
                break;
            case 'notDoneTasks':
                this.notDoneButtonWrapper.dataset.select = "selected";
                break;
        }
    }

    addButtonListeners() {
        this.allTasks.addEventListener('click', (event) => {
            actionService.dispatch(`allFilter`, this.props);
        });

        this.doneTasks.addEventListener('click', (event) => {
            actionService.dispatch(`doneFilter`, this.props);
        });

        this.notDoneTasks.addEventListener('click', (event) => {
            actionService.dispatch(`notDoneFilter`, this.props);
        });

    }


}

customElements.define("my-component-filter", FilterComponent);
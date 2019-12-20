
import {
    Component
} from "./Component.js";
import {
    counterTemplate
} from "../templates/counter-template.js";

export class CounterComponent extends Component {
    constructor(props) {
        super(props);
    }

    onInit() {
        this.template = counterTemplate;
        this.render();
        this.applyChanges();
    }

    set state(value) {
        this.props = { ...this.props,
            state: value
        };
        this._state = { ...value
        };
        this.applyChanges();
    }

    get state() {
        return this._state;
    }

    render() {
        this.anchor.appendChild(this);

        this.allTasks = this.shadowRoot.querySelector('.all-tasks');
        this.completedTasks = this.shadowRoot.querySelector('.completed-tasks');
        this.notCompletedTasks = this.shadowRoot.querySelector('.not-completed-tasks');
    }

    applyChanges() {
        console.log(this.props)
        this.allTasks.textContent = this.props.state.countTasks.all;
        this.completedTasks.textContent = this.props.state.countTasks.completed;
        this.notCompletedTasks.textContent = this.props.state.countTasks.notCompleted;
    }
}

customElements.define('my-component-counter', CounterComponent);
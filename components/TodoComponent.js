import {
    eventBus
} from "../services/eventService.js";
import {
    TaskListComponent
} from "./TaskListComponent.js";
import {
    InputComponent
} from "./InputComponent.js";
import {
    FilterComponent
} from "./FilterComponent.js";
import {
    CounterComponent
} from "./CounterComponent.js";
import {
    Component
} from "./Component.js";
import {
    todoTemplate
} from "../templates/todo-template.js";


export class TodoComponent extends Component {
    constructor(props) {
        super(props);
    }

    set state(value) {
        this._state = { ...value
        };
        this.props.state = this._state;
        this.applyChanges(value);
    }

    onInit() {
        this.template = todoTemplate;
        console.log('initTodoComponent')
        this.actionService.dispatch('initTodoComponent');
        //this.render();
    }


    connectedCallback() {
        // addEventListener();
    }

    render() {
        this.anchor.appendChild(this);
        // const leftColumn = this.shadowRoot.querySelector('.left-column');
        const rightColumn = this.shadowRoot.querySelector('.right-column');
        const todoListWrapper = this.shadowRoot.querySelector('.todo-list-wrapper');
        const inputWrapper = this.shadowRoot.querySelector('.input-wrapper');
        const filterWrapper = this.shadowRoot.querySelector('.filter-wrapper');
        //console.log(this.shadowRoot);

        const input = new InputComponent({ ...this.props,
            anchor: inputWrapper
        });
        this.taskList = new TaskListComponent({ ...this.props,
            anchor: todoListWrapper
        });
        this.filter = new FilterComponent({ ...this.props,
            anchor: filterWrapper
        });
        this.counter = new CounterComponent({...this.props, anchor: rightColumn});

       // this.addListeners();
    }

    applyChanges(state) {
        if(!this.isInit) {
            this.isInit =true;
            this.render();
        }
        this.taskList.state = {...state};
        this.filter.state = {...state};
        this.counter.state = {...state};
    }

   /* addListeners() {
        this.eventService.subscribe('stateChanged', (state) => {
            this.state = state;
           /!* //console.log(state)
            this.sendState([
                this.taskList,
                //this.filter,
                //this.counter,
            ], state);*!/
        });
    }*/

}

customElements.define('my-component-todo', TodoComponent);
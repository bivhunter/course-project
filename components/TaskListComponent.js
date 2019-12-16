import {
    TaskComponent
} from "./TaskComponent.js";
import {
    eventBus
} from "../services/eventService.js";
import {
    TextAreaComponent
} from "./textAreaComponent.js";
import {
    Component
} from "./Component.js";
import {
    taskListTemplate
} from "../templates/task-list-template";

export class TaskListComponent extends Component {
    constructor(props) {
        super(props);
        //this.template = template;
    }

    onInit() {
        this.template = taskListTemplate;
        /*this.attachShadow({mode: 'open'});
        this.addListeners();*/
    }

    addListeners() {
        this.addEventListener('click', this.clickListener.bind(this));

        /* eventBus.subscribe('responseSuccessful', (data) => {
             this.props.taskList = data;
             this.renderList();
         });*/

        eventBus.subscribe('cancelEditing', (task) => {
            this.editingLi.innerHTML = "";
            this.editingLi.appendChild(new TaskComponent({
                task: task
            }));
        });

    }

    clickListener(event) {
        //console.log(event.target);
        //console.log(event.currentTarget);
        const targetList = event.composedPath();
        if (targetList[0].tagName === "BUTTON") {
            return;
        }

        const taskComponent = targetList.find((item) => {
            return item.tagName === "MY-COMPONENT-TASK";
        });

        if (!taskComponent) {
            return;
        }

        this.editingLi = targetList.find((item) => {
            return item.tagName === "LI";
        });

        this.textArea = new TextAreaComponent({
            task: taskComponent.props.task
        });

        requestAnimationFrame(() => {
            this.editingLi.replaceChild(this.textArea, taskComponent);
        });

        this.textArea.focus();


    }

    render() {
        this.anchor.appendChild(this);

        this.ul = this.shadowRoot.querySelector('ul');
        this.renderList();

    }

    renderList() {
        //console.log(this.shadowRoot)
        this.ul.innerHTML = '';
        this.state.todoView.forEach((task) => {
            this.addTask(task);
        });
    }

    addTask(task) {
        const li = document.createElement('li');
        if (task.editing) {
            const taskComponent = new TextAreaComponent({ ...this.props,
                anchor: li,
                task: task
            });
        } else {
            const taskComponent = new TaskComponent({ ...this.props,
                anchor: li,
                task: task
            });
        }
        this.ul.appendChild(li);
    }
}

customElements.define('my-component-task-list', TaskListComponent);
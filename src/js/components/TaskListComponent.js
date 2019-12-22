import { TaskComponent } from "./TaskComponent.js";
import { TextAreaComponent } from "./TextAreaComponent.js";
import { Component } from "./Component.js";
import { taskListTemplate } from "../templates/task-list-template.js";

export class TaskListComponent extends Component {
    constructor(props) {
        super(props);
    }

    onInit() {
        this.template = taskListTemplate;
        this.render();
    }

    render() {
        this.anchor.appendChild(this);
        this.ul = this.shadowRoot.querySelector('ul');
        this.renderList();
    }

    renderList() {
        this.ul.innerHTML = '';
        this.props.state.todoView.forEach((task) => {
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
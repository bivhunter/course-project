import {TaskComponent} from "./TaskComponent.js";
//import styles from "../css/TaskList.css";
import {eventBus} from "../eventService.js";
import {TextAreaComponent} from "./textAreaComponent.js";
import {Component} from "./Component.js";

const template = document.createElement('template');

template.innerHTML = `
    <div>
    <ul></ul>
</div>
`;

export class TaskListComponent extends Component {
    constructor(props = {taskList: []}){
        super(props);
    }

    onInit() {
        this.template = template;
        this.style = './css/task-list-component.css';

        /*this.attachShadow({mode: 'open'});
        this.addListeners();*/
    }

    addListeners() {
        this.addEventListener('click', this.clickListener.bind(this));

        eventBus.subscribe('responseSuccessful', (data) => {
            this.props.taskList = data;
            this.renderList();
        });

        eventBus.subscribe('cancelEditing', (task) => {
            this.editingLi.innerHTML = "";
            this.editingLi.appendChild(new TaskComponent(task));
        });

    }

    clickListener(event) {
        //console.log(event.target);
        //console.log(event.currentTarget);
        const targetList = event.composedPath()
        if(targetList[0].tagName === "BUTTON") {
           return;
        }

        const task = targetList.find((item) => {
            return item.tagName === "MY-COMPONENT-TASK";
        });

        if(!task) {
            return;
        }

        this.editingLi = targetList.find((item) => {
            return item.tagName === "LI";
        });

        this.textArea = new TextAreaComponent(task.props);
        task.remove();
        this.editingLi.appendChild(this.textArea);
        this.textArea.focus();
    }

    render() {
        //const div = this.template.querySelector('div');
        this.ul = this.template.querySelector('ul');
        this.renderList();
       // this.template.appendChild(div);
    }

    renderList() {
        this.ul.innerHTML = '';
        this.props.taskList.forEach((task) => {
            this.addTask(task);
        });
    }

    addTask(task) {
        const li = document.createElement('li');
        const taskComponent = new TaskComponent(task);
        li.appendChild(taskComponent);
        this.ul.appendChild(li);
    }
}

customElements.define('my-component-task-list', TaskListComponent);
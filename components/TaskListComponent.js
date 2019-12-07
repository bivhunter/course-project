import {TaskComponent} from "./TaskComponent.js";
//import styles from "../css/TaskList.css";
import {eventBus} from "../eventService.js";
import {TextAreaComponent} from "./textAreaComponent.js";

const template = document.createElement('template');

template.innerHTML = `
    <style>
    ul{
    list-style-type: none;
    }
</style>
`;

export class TaskListComponent extends HTMLElement {
    constructor(props = {taskList: []}){
        super();
        this._props = props;
    }

    onInit() {
        this.attachShadow({mode: 'open'});
        this.addListeners();
    }

    addListeners() {
        this.addEventListener('click', this.clickListener.bind(this));


       /* eventBus.subscribe('deleteData', (id) => {
           this.removeTask(id);
        });
*/
        eventBus.subscribe('responseSuccessful', (data) => {
            this._props.taskList = data;
            this.renderList();
        });

        eventBus.subscribe('cancelEditing', (task) => {
            this.editingLi.innerHTML = "";
            this.editingLi.appendChild(new TaskComponent(task));
        });

       /* eventBus.subscribe('patchData', (task) => {
            this._props.taskList.map((item) => {
               if(item.id === task.id) {
                   return task;
               }
               return item;
            });
            console.log(this._props.taskList, task);
            this.patchTask(task);
        });*/

       /* eventBus.subscribe('addData', (task) => {
           this._props.taskList.push(task);
           this.addTask(task, 'afterbegin');
        });*/
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

    connectedCallback() {
        this.onInit();
        this.render();
    }

    render() {
        const div = document.createElement('div');
        this.ul = document.createElement('ul');

        this.renderList();

        div.appendChild(this.ul);
        const tmpl = template.content.cloneNode(true);
        tmpl.appendChild(div);
        this.shadowRoot.appendChild(tmpl);
    }

    renderList() {
        this.ul.innerHTML = '';
        this._props.taskList.forEach((task) => {
            this.addTask(task);
        });
    }

    addTask(task) {
        const li = document.createElement('li');
        const taskComponent = new TaskComponent(task);
        li.appendChild(taskComponent);
        this.ul.appendChild(li);
    }

   /* patchTask(task) {
        const taskComponent = this.shadowRoot.querySelector(`my-component-task[data-id="${task.id}"]`);
        taskComponent.props = task;
    }

    removeTask(id) {
        this._props.taskList = this._props.taskList.filter((item) => {
            return item.id !== id;
        });

        const tmp = this.shadowRoot.querySelector(`my-component-task[data-id="${id}"]`);
        if(tmp) {
            tmp.parentNode.remove();
        }
    }*/
}

customElements.define('my-component-task-list', TaskListComponent);
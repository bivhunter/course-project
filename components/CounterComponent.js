import {eventBus} from "../services/eventService.js";

const template = document.createElement('template');
template.innerHTML = `
<style>
    td {
        padding: 10px;
    }
</style>
        <div>
        <table>
        
</table>
        
</div>    
    `;

export class CounterComponent extends HTMLElement{
    constructor() {
        super();
    }

    connectedCallback() {
        this.onInit();
        this.render();
    }

    onInit() {
        this.attachShadow({mode: "open"});
        this.addListeners();
    }

    addListeners() {
        eventBus.subscribe('countedTasks', (data) => {
           this.changeInfo(data);
        });
    }

    changeInfo(data) {
        this.allCounter.innerHTML = `<td>All tasks</td><td> ${data.allNum}</td>`;
        this.doneCounter.innerHTML = `<td>Completed tasks </td><td>${data.doneNum}</td>`;
        this.notDoneCounter.innerHTML = `<td>Not completed tasks</td><td>${data.notDoneNum}</td>`;
    }

    render() {
        const temp = template.content.cloneNode(true);
        this.allCounter = document.createElement('tr');
        this.doneCounter = document.createElement('tr');
        this.notDoneCounter = document.createElement('tr');


        temp.append(this.allCounter, this.doneCounter,this.notDoneCounter );
        this.shadowRoot.appendChild(temp);

        this.wrapper = this.shadowRoot.querySelector('div');

    }
}

customElements.define('my-component-counter', CounterComponent );
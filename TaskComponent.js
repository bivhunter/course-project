export class TaskComponent {
    constructor(anchor, props) {
        this.anchor = anchor;
        this._props = props;
        this.onInit();
        this.render();

    }

    onInit() {
        const elem = document.createElement('div');
        const span = document.createElement('span');
        elem.appendChild(span);
        span.textContent = this._props.task.name;
        this._elem = elem;
    }


    render() {
        this.anchor.appendChild(this._elem);
    }


}
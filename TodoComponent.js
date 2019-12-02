export class TodoComponent {
    constructor(anchor, props) {
        this._anchor = anchor;
        this._props = props;
        this.onInit();
        this.render();
    }

    onInit() {
        const elem = document.createElement('div');
        this._elem = elem;

    }

    render() {
        this._anchor.appendChild(this._elem);
    }

}
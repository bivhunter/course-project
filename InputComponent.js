export class InputComponent{
    constructor(anchor) {
        this._anchor = anchor;
        this.onInit();
        this.render();
    }

    onInit() {
        const elem = document.createElement('div');

        const input = document.createElement('input');
        elem.appendChild(input);

        this._elem = elem;
    }

    render() {
        this._anchor.appendChild(this._elem);
    }
}
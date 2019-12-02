export class Task {
    constructor(str) {
        this.text = str;
        this.id = this.createId();
        this.isReady = false;
    }

    createId() {
        return Math.round(Math.random() * 10 ** 10);
    }





}
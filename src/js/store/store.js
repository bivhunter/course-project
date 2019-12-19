import {
    createReducers
} from "./reducers.js";

export class Store {
    constructor(props) {
        this.reducers = createReducers();
        this.eventService = props.eventService;
        this.state = {
            todoList: [],
            todoView: []
        };

    }

    dispatch(actionType, payload) {

        if (this.reducers[actionType]) {
            this.state = this.reducers[actionType](payload, this.state);
        }
        console.log(this.state);
        this.eventService.publish('stateChanged', this.state);
    }

}
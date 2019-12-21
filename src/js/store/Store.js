import {
    createReducers
} from "./reducers.js";
import { eventService } from "../services/EventService.js";

class Store {
    constructor() {
        this.reducers = createReducers();
        this.state = {
            todoList: [],
            todoView: []
        };

    }

    dispatch(actionType, payload, message) {

        if (this.reducers[actionType]) {
            this.state = this.reducers[actionType](payload, this.state, message);
        }
        console.log(this.state);
        eventService.publish('stateChanged', this.state);
    }

}

export const store = new Store();
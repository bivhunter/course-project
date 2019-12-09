import {eventBus} from "../eventService.js";
import {EventService} from "../eventService.js";

class Store{
    constructor(reducers){
        this.reducers = reducers;
        this.state = {
            todo: [],
        }
        this.events = new EventService();
    }

    publish(actionType, payload) {
        if(this.reducers[actionType]) {
            this.state = this.reducers[actionType](payload, this.state);
        }
        this.events.publish('change', this.state);
    }

}
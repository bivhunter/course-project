import {eventBus} from "../services/eventService.js";


export class Store{
    constructor(props){
        this.reducers = props.reducers;
        this.eventService = props.eventService;
        this.state = {
            todoList: [],
            todoView: []
        };

    }

    dispatch(actionType, payload) {
        if(this.reducers[actionType]) {
            this.state = this.reducers[actionType](payload, this.state);
        }
        console.log('state');
        this.eventService.publish('stateChanged', this.state);
    }

}
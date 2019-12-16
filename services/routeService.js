import {TodoComponent} from "../components/TodoComponent.js";
import {LoginComponent} from "../components/LoginComponent.js";

const routerConfig = {
	'login': {
		url: 'todo-app/login',
		component: LoginComponent,
		route: 'login'
	},
	'todo': {
		url: 'todo-app',
		component: TodoComponent,
		route: 'todo'
	}
};


export class RouteService {
	constructor(props) {
		this.props = props;
		this.actionService = props.actionService;
		this.anchor = props.anchor;
		this.routerConfig = routerConfig;
		this.eventService = props.eventService;
        this.state = props.state;
        this.changeRoute(props.state.route);
		this.addListeners();
	}

	set state(value) {
		this._state = { ...this.state,
			...value
		};
		
	}

	get state() {
		return this._state;
	}

	changeRoute(route) {
		this.currentRoute = this.routerConfig[route];
		if(!this.currentRoute) {
			return;
		}

		if(!this.currentComponent){
			this.currentComponent = new this.currentRoute.component(this.props);
		} else {
			
			this.anchor.innerHTML = '';
			this.currentComponent = new this.currentRoute.component(this.props);
		}

		window.history.pushState(this.currentRoute.route, '', this.currentRoute.url);
	}

	addListeners(){
        this.eventService.subscribe('stateChanged', (state) => {
            this.state = state;
        	if(state.route === this.currentRoute.route) {
        		this.currentComponent.state = {...state};
			} else {
                this.changeRoute(state.route);
            }
        });
    }


}
import {
	TodoComponent
} from "../components/TodoComponent.js";
import {
	LoginComponent
} from "../components/LoginComponent.js";

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


class RouteService {
	constructor(props) {
		this.props = props;
		this.requestService = props.requestService;
		this.actionService = props.actionService;

		this.anchor = props.anchor;
		this.routerConfig = routerConfig;
		this.eventService = props.eventService;
		this.state = props.state;
		this.onInit();

		this.addListeners();
	}

	onInit() {
		this.requestService.checkAuthorization(localStorage.getItem('token'))
			.then((res) => {
				console.log(res);
				this.changeRoute('todo');
			})
			.catch((error) => {
				console.log(error);
				this.changeRoute('login');
			});
	}

	set state(value) {
		this._state = { ...this.state,
			...value
		};

	}

	get state() {
		return this._state;
	}

	getConstructor() {
		return {
			route: this.state.route
		}
	}

	changeRoute(route) {
		this.currentRoute = this.routerConfig[route];
		window.history.pushState(this.currentRoute.route, '', this.currentRoute.url);
		return this.currentRoute;
	}

	addListeners() {
		this.eventService.subscribe('stateChanged', (state) => {
			this.state = state;
			if (state.route === this.currentRoute.route) {
				this.currentComponent.state = { ...state
				};
			} else {
				this.changeRoute(state.route);
			}
		});
	}


}

export const routeService = new RouteService();
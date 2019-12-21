import {
	TodoComponent
} from "../components/TodoComponent.js";
import {
	LoginComponent
} from "../components/LoginComponent.js";

const routerConfig = {
	'login': {
		url: '/login',
		component: LoginComponent,
		route: 'login'
	},
	'todo': {
		url: '/todo-app',
		component: TodoComponent,
		route: 'todo'
	}
};


class RouteService {
	constructor() {
		this.routerConfig = routerConfig;
		//this.onInit();

		//this.addListeners();
	}

	/*onInit() {
		this.requestService.checkAuthorization(localStorage.getItem('token'))
			.then((res) => {
				console.log(res);
			})
			.catch((error) => {
				console.log(error);
				this.changeRoute('login');
			});
	}*/

	changeRoute(route) {
		this.currentRoute = this.routerConfig[route];
		window.history.replaceState(this.currentRoute.route, '', this.currentRoute.url);
		return this.currentRoute;
	}

	/*addListeners() {
		this.eventService.subscribe('stateChanged', (state) => {
			this.state = state;
			if (state.route === this.currentRoute.route) {
				this.currentComponent.state = { ...state
				};
			} else {
				this.changeRoute(state.route);
			}
		});
	}*/


}

export const routeService = new RouteService();
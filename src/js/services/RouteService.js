import { TodoComponent } from "../components/TodoComponent.js";
import { LoginComponent } from "../components/LoginComponent.js";
import { actionService } from "./ActionService.js";

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
		this.addListeners();
	}

    addListeners() {
        window.onpopstate = (event) => {
            actionService.dispatch('changeRoute', event.state );
        };
	}

	changeRoute(route) {
		this.currentRoute = this.routerConfig[route];
		window.history.pushState(this.currentRoute.route, '', this.currentRoute.url);
		return this.currentRoute;
	}
}

export const routeService = new RouteService();
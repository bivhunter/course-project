
const routerConfig = {
	'login': {
		url: 'todo-app/login',
		component: 'LoginComponent',
		rout: 'login'
	},
	'todo': {
		url: 'todo-app',
		component: 'TodoComponent',
		rout: 'todo'
	}
}


export class RoutServise {
	constructor(props) {
		this.state = props.state;
		this.actionService = props.actionService;
		this.anchor = props.anchor;
		this.routerConfig = routerConfig;
		this.eventService = props.eventService;
		this.addListeners();
	}

	set state(value) {
		this._state = { ...this.state,
			value
		};
		changeRout(value.rout);
	}

	changeRout(rout) {
		const router = this.routerConfig[rout];
		if(!router) {
			return;
		}

		if(!this.currentComponent){
			this.currentComponent = new this.router.component(this.props);
		} else {
			this.anchor.innerHTML = '';
			this.currentComponent = new this.router.component(this.props);
		}

		window.history.pushState(router.rout, '', router.url);
	}

	addListeners(){
        this.eventService.subscribe('stateChanged', (state) => {
           this.state = state;
        });
    }


}
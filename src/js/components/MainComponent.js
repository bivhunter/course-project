import {
	mainTemplate
} from "../templates/main-template.js";
import {
	Component
} from "./Component.js";

export class MainComponent extends Component {
	constructor(props) {
		super(props);
        this.currentRoute = {name: ''};
		this.onInit();
		this.render();
		this.addListeners();
	}

    set state(value) {
        this._state = { ...this.state,
            ...value
        };
		this.props = {...this.props, state: this._state};
    }

    get state() {
        return this._state;
    }

	onInit() {
		this.template = mainTemplate;


		//this.render();
	}

	addListeners() {
        this.eventService.subscribe('stateChanged', (state) => {
        	this.state = state;
            if (state.route.name !== this.currentRoute.name) {
                this.routeService.changeRoute(state.route.name);
                if(this.currentComponent) {
                	this.currentComponent.remove();
					}
                } else {
                this.currentRoute = state.route;
            	this.renderComponent();
			}
        });
        this.actionService.dispatch('initApplication');
	}

	render() {
		this.anchor.appendChild(this);
		this.tooltipWrapper = this.shadowRoot.querySelector('.tooltip-wrapper');
		this.appWrapper = this.shadowRoot.querySelector('.app-wrapper');
	}


	renderComponent() {
        if (!this.currentComponent) {
            this.currentComponent = new this.currentRoute.component({
				...this.props,
				anchor: this.appWrapper});
        } else {
        	this.applyChanges();
		}
	}

	applyChanges() {
         this.currentComponent.state = {...this.state};
	}
}

customElements.define("my-component-main", MainComponent);
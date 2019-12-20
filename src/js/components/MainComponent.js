import {
	mainTemplate
} from "../templates/main-template.js";
import {
	Component
} from "./Component.js";
import {actionService} from "../services/actionService.js";
import {eventService} from "../services/eventService.js";

export class MainComponent extends Component {
	constructor(props) {
		super(props);
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
        eventService.subscribe('stateChanged', (state) => {
        	this.state = state;
        	if(!(this.currentComponent instanceof state.route.component)) {
                this.renderComponent();
			} else {
        		this.applyChanges();
			}
        });
        actionService.dispatch('initApplication');
	}

	render() {
		this.anchor.appendChild(this);
		this.tooltipWrapper = this.shadowRoot.querySelector('.tooltip-wrapper');
		this.currentComponent = this.shadowRoot.querySelector('.app-wrapper');
		this.mainWrapper = this.shadowRoot.querySelector('.main');
	}

	renderComponent() {
        this.currentComponent.remove();
        this.currentComponent = new this.state.route.component({
				...this.props,
				anchor: this.mainWrapper
        });
	}

	applyChanges() {
         this.currentComponent.state = {...this.state};
	}
}

customElements.define("my-component-main", MainComponent);
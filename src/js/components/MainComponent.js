import { mainTemplate } from "../templates/main-template.js";
import { Component } from "./Component.js";
import { actionService } from "../services/ActionService.js";
import { eventService } from "../services/EventService.js";
import { TooltipComponent } from "./TooltipComponent.js";

export class MainComponent extends Component {
	constructor(props) {
		super(props);
		this.render();
		this.addListeners();
	}

	set state(value) {
		this._state = { ...value
		};
		this.props.state = this._state;
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
			this.showTooltip(state.message);
			this.state = state;
			if (!(this.currentComponent instanceof this.state.route.component)) {
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
		this.tooltip = new TooltipComponent({
			anchor: this.tooltipWrapper
		});

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

	showTooltip(message) {
		this.tooltip.state = message;
	}

	applyChanges() {
		this.currentComponent.state = { ...this.state
		};
	}
}

customElements.define("my-component-main", MainComponent);
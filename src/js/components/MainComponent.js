import {
	mainTemplate
} from "../templates/main-template.js";
import {
	Component
} from "./Component.js";

import class MainComponent extends Component {
	constructor(props) {
		this.onInit();
	}

	onInit() {
		this.template = mainTemplate;
		this.actionService.dispatch('initApplication');

		this.render();
	}

	addListeners() {

	}

	render() {
		this.anchor.appendChild(this);
		this.tooltipWrapper = this.shadowRoot.querySelector('.tooltip-wrapper');
		this.appWrapper = this.shadowRoot.querySelector('.app-wrapper');

		if (!this.currentConstructor) {
			this.currentConstructor = this.routeService.getConstructor();
		}
	}
}

customElements.define("my-component-main", MainComponent);
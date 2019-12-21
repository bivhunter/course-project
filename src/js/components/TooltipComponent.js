import { Component } from "./Component.js";
import { tooltipTemplate } from "../templates/tooltip-template.js";
import {MainComponent} from "./MainComponent";

export class TooltipComponent extends Component{
	constructor(props) {
		super(props);
		this.duration = 3000;
		this.timerId = null;
	}

	onInit() {
		this.template = tooltipTemplate;
		this.anchor.appendChild(this);
		this.tooltip = this.shadowRoot.querySelector('.tooltip');
        this.tooltipWrapper = this.shadowRoot.querySelector('.wrapper');
		this.tooltipWrapper.style.display = 'none';
	}

	render() {
		if(this.state.status === 'none') {
			return;
		}
        this.tooltip.textContent = this.state.text;

        this.tooltipWrapper.classList.remove(this.currentStyleClass);
		this.tooltipWrapper.classList.add(this.state.status);
		this.currentStyleClass = this.state.status;

		this.tooltipWrapper.style.display = 'table-cell';

		clearTimeout(this.timerId);
		 this.timerId = setTimeout(() => {
            this.tooltipWrapper.style.display = 'none';

		}, this.duration);
	}
}

customElements.define("my-component-tooltip", TooltipComponent);
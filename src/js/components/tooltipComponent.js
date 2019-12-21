import {
	Component
}
"./components/Component.js"


export class TooltipComponent {
	constructor(props) {
		this.duration = 3000;
	}

	onInit() {
		this.anchor.appendChild(this);
		this.tooltip = this.shadowRoot.querySelector('tooltip');
		this.tooltip.style.display = 'none';
	}

	render(state) {
		this.tooltip.textContent = state.text;
		this.classList.add(state.status);
		this.this.tooltip.style.display = 'block';
		setTimeout(() => {
			this.this.tooltip.style.display = 'none';
		}, this.duration);
	}


}
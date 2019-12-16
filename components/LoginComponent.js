import {
	Component
} from "./Component.js";
import {
	loginTemplate
}
from "../templates/login-template.js";

export class LoginComponent extends Component {
	constructor(props) {

	}

	onInit() {
		this.template = loginTemplate;
		render();
	}

	render() {
		this.anchor.appendChild(this);
		this.emailInput = this.shadowRoot.querySelector('[name="email"]');
		this.passwordInput = this.shadowRoot.querySelector('[name="password"]');
		this.formElement = this.shadowRoot.querySelector('[name]="login"');

		this.submitButton = new ButtonComponent({
			title: 'Sign In',
			classStyle: "submit-button",
			anchor: this.formElement
		});

		this.addButtonListeners();
	}

	addButtonListeners() {
		this.submitButton.addEventListener('click', () => {
			this.serviceAction.dispatch('signIn', {
				email: this.emailInput.value,
				password: this.passwordInput.value
			});
		});
	}
}
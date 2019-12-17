import {
	Component
} from "./Component.js";
import {
	loginTemplate
}
from "../templates/login-template.js";
import {ButtonComponent} from "./ButtonComponent.js";

export class LoginComponent extends Component {
	constructor(props) {
		super(props);
	}

	onInit() {
		this.template = loginTemplate;
		this.render();
	}

	render() {
		this.anchor.appendChild(this);
		this.emailInput = this.shadowRoot.querySelector('input[name="email"]');
		this.passwordInput = this.shadowRoot.querySelector('input[name="password"]');
		this.formElement = this.shadowRoot.querySelector('[name="login"]');

		const inButtonWrapper = this.shadowRoot.querySelector('.in-button');
		const outButtonWrapper = this.shadowRoot.querySelector('.up-button');

		this.submitButton = new ButtonComponent({
			title: 'Sign In',
			classStyle: "submit-button",
			anchor: inButtonWrapper
		});

        this.registerButton = new ButtonComponent({
            title: 'Sign Up',
            classStyle: "submit-button",
            anchor: outButtonWrapper
        });

		this.addButtonListeners();
	}

	addButtonListeners() {
		this.submitButton.addEventListener('click', () => {
			this.actionService.dispatch('signIn', {
				email: this.emailInput.value,
				password: this.passwordInput.value
			});
		});

        this.registerButton.addEventListener('click', () => {
        	if(!this.registerMode) {
                this.userNameInput = this.shadowRoot.querySelector( 'input[name="username"]' );
                this.userNameInput.classList.toggle( 'hide' );

                const label = this.shadowRoot.querySelector( '.username' );
                label.classList.toggle( 'hide' );

                this.registerMode = true;
            } else {
                this.actionService.dispatch('signUp', {
                    email: this.emailInput.value,
                    password: this.passwordInput.value,
					username: this.userNameInput.value
                });
            }
        });
	}


}

customElements.define("my-component-login", LoginComponent);
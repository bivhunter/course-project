import {
	Component
} from "./Component.js";

const template = document.createElement('template');
template.innerHTML = `
	<<style>
			@import url('./css/login-component.css');
		</style>
		<div class="form-wrapper">
			
				
				<form name="login">
					<h1>Login Form</h1>
					<label for="email">Email</label>
					<input type="email" name="email" placeholder="Enter Email">
					<label for="password">Password</label>
					<input type="password" name="password" placeholder="Enter Password">
					<button type="submit">Sign In</button>
				</form>
			
		</div>
`

export class LoginComponent extends Component {
	constructor() {

	}


}
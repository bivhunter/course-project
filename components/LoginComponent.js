import {
	Component
} from "./Component.js";

const template = document.createElement('template');
template.innerHTML = `
	<div class="form-wrapper">
		<form name="login">
			<input type="email" placeholder="Enter Email">
			<input type="password" placeholder="Enter Password">
			
		</form>
	</div>
`

export class LoginComponent extends Component {
	constructor() {

	}


}
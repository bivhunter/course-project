export const loginTemplate = document.createElement('template');
loginTemplate.innerHTML = `
	<style>
		.form-wrapper{
				height: 600px;
				width: 600px;
				margin: 10px auto 10px auto;
				display: table-cell;
				vertical-align: middle;
				text-align: center;
			}

h1{
	font-size: 40px;
	text-align: center;
	margin:20px;
	color: #715636;
	text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

input:hover{
	background: #E7CCAC;
}
input:focus{
	outline: 3px #B99E7E groove;
	border: 3px #B99E7E groove;
}

input:-webkit-autofill{
	background: #E7CCAC
}


label, input {
	color: #715636;
	text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
				font-size: 20px;

				margin: 10px 0 10px 0 ;
				display: block;
			} 
label{
	color: #715636;
	text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
}			

input {
	width:300px;
	height: 30px;
	border: 3px #B99E7E groove;
	border-radius: 4px;
	box-shadow: 2px 2px 4px rgba(0,0,0,0.5);
	
}

form{
    width: 400px; 
	/*height: 400px;*/
	background: #FFE4C4;
	display: block;
	box-sizing: border-box;
	
	margin: 10px auto 10px auto; 
	padding: 50px; 
	text-align: left;
	border-radius: 10px;
	border: 5px #B99E7E groove;
	box-shadow: 5px 5px 10px rgba(0,0,0,0.5);


	/* border-style: groove ridge ridge groove; */
	/* display: table-cell;
	vertical-align: middle; */
}

.hide{
    display: none;
}

table{
    width: 100%;
}

td{
    vertical-align: middle;
}


	</style>
	<div class="form-wrapper">
		<form name="login">
			<h1>Login Form</h1>
			<label for="username" class="hide username">User Name</label>
			<input type="text"  class="hide" name="username"  placeholder="Enter User Name">
			<label for="email">Email</label>
			<input type="email" name="email" autocomplete="on" placeholder="Enter Email">
			<label for="password">Password</label>
			<input type="password" name="password" autocomplete="on" placeholder="Enter Password">
			
			
			<table>
			    <tr>
			        <td class="in-button"></td>
			        <td class="up-button"></td>
                </tr>
            </table>
		</form>
	</div>
`
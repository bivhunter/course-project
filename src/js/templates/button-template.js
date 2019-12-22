export const buttonTemplate = document.createElement('template');
buttonTemplate.innerHTML = `
	<style>
	button{
    transition-duration: 0.6s;
    cursor: pointer;
    border-radius: 5px;
    outline: none;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
}

.delete-button, .cancel-button, .not-done-filter-button{
    background-color: white;
    color: black;
    border: 2px solid red; 
     box-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

.delete-button:hover, .cancel-button:hover, .not-done-filter-button:hover {
    background-color: red; 
    color: white;
}

.not-todo-button, .all-filter-button{
    background-color: white;
    color: black;
    border: 2px solid blue;
     box-shadow: 2px 2px 4px rgba(0,0,0,0.5); 
}

.not-todo-button:hover, .all-filter-button:hover {
    background-color: blue; 
    color: white;
}



.todo-button, .save-button, .add-button, .done-filter-button{
    background-color: white;
    color: black;
    border: 2px solid green; 
     box-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

.todo-button:hover, .save-button:hover, .add-button:hover, .done-filter-button:hover {
    background-color: green; 
    color: white;
}

.sign-out-button{
    border: 3px #B99E7E groove;
    border-radius: 4px;
    box-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    background-color: white;
}

.submit-button{
    font-size: 20px;
    height: 40px;
    box-sizing: border-box;
    padding: 0 20px 0 20px;
    display: block;
    margin: 30px auto 10px auto; 
    border: 3px #B99E7E groove;
    border-radius: 4px;
    box-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    background-color: white;
    color: #715636;
}

.submit-button:hover, .sign-out-button:hover {
    background-color: #B99E7E; 
    color: white;
}
	</style>
	<button type="submit">
	
    </button>
`
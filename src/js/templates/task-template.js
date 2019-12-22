export const taskTemplate = document.createElement('template');
taskTemplate.innerHTML = `
<style>
	div {
    height: 100%;
}

.left-column{
    float: left;
    width: 80%;

}

.right-column{
    
    float: right;
    width: 20%;
}

td {
    text-align: center;
    vertical-align: center;
}
table{
    width: 100%;
    height: 75%;
}

p {
    width: 100%;
    margin: 10px;
    padding: 0;
}

:host{
    position: relative;
    overflow: auto;
    margin-top: 14px;
    display: block;
    height: 70px;
    border-radius: 10px;
     
    box-shadow:  -2px -2px 4px rgba(0,0,0,0.5);
    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
}

:host([data-completed = "true"]){
    background: #81FFD6;
    border: 3px #0A885F groove; 
}

:host([data-completed = "true"]:hover){
    background:#54D2A9;
    box-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

:host([data-completed = "false"]){
    border: 3px #C44F38 groove; 
    background: #FFC0A9;
}

:host([data-completed = "false"]:hover){
    background:#EA755E;
   
  box-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

span{
    position: absolute;
    right: 15px;
    bottom: 2px;
    font-size: 12px;
    color: #4d4d4d;
    text-shadow: 2px 2px 3px rgba(0,0,0,0.5);
}
</style>	

<div class="left-column">
   
    <p></p>
</div>
<div class="right-column">
    <table>
        <tr><td class="done-button-wrapper"></td></tr>
        <tr><td class="delete-button-wrapper"></td></tr>
        
    </table>
     <span></span>
</div>
`
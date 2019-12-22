export const textareaTemplate = document.createElement('template');
textareaTemplate.innerHTML = `
    <style>
 .left-column{
    float: left;
    width: 80%;

}

.right-column{
    height: 100%;
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

:host{
position: relative;
    margin-top: 14px;
    display: block;
    height: 70px;
    border-radius: 10px;
    border: 3px #665646 groove;  
    box-shadow:  -2px -2px 4px rgba(0,0,0,0.5);
    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
}

:host([data-completed = "false"]){
    background: #EA755E;
}

:host(my-component-textarea[data-completed = "true"]){
    background: #68E8BD;
}


.text-area{
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    padding: 10px;
    margin: 0;
    border: none;
    outline: none;
    resize: none;
    background: inherit;
    font: inherit;
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
       <textarea class="text-area"></textarea>
 </div>
 <div class="right-column">
       <table>
         <tr><td class="save-button-wrapper"></td></tr>
         <tr><td class="cancel-button-wrapper"></td></tr>
       </table>
       <span></span>
       </div>    
`;

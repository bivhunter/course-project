export const textareaTemplate = document.createElement('template');
textareaTemplate.innerHTML = `
    <style>
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
    margin: auto;
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
    </style>
    
 <div class="left-column">
       <textarea class="text-area"></textarea>
 </div>
 <div class="right-column">
       <table>
         <tr><td class="save-button-wrapper"></td></tr>
         <tr><td class="cancel-button-wrapper"></td></tr>
       </table>
       </div>    
`;

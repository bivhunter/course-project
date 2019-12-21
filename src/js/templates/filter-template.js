export const filterTemplate = document.createElement('template');
filterTemplate.innerHTML = `
    <style>
   
    .wrapper {
   
        width: 100% ;
    }
    table {
    
      margin: 10px;
        /*width: 100%;*/
        
        height: 100%;
    }
    td {
        text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
        padding: 8px;
    }
    
    [data-select="selected"] {
        border-radius: 10px;
        border: 3px #B99E7E groove;  
        box-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        background: #FFE4C4;
    }
</style>
    <div class="wrapper">
        
        <table>
            <tr>
                <td>Filter tasks</td>
                <td class="all-wrapper"></td>
                <td class="done-wrapper"></td>
                <td class="not-done-wrapper"></td>
            </tr>    
        </table>    
    </div>    
`;

export const tooltipTemplate = document.createElement('template');
tooltipTemplate.innerHTML = `
<style>
    .wrapper{
        width: 600px;
        height: 40px;
        text-align: center;
        vertical-align: middle;
        font-size: 20px;
        box-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
        border-radius: 4px;
    }
    
    .done{
        border: 3px #61C661 groove;
        background-color: #A2FFA2;
    }
  
    .warn {
        border: 3px #DBC0A0 groove;
        background-color: #FFE4C4;
    }  
    
     .error {
        border: 3px #DE8181 groove;
        background-color:#FFA2A2;
    }  
  
</style>
<div class="wrapper">
    <span class="tooltip"></span>
</div>    
`
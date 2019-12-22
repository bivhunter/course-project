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
        border-radius: 10px;
    }
    
    .done{
        border: 3px #0A885F groove;
        background-color: #81FFD6;
    }
  
    .warn {
        border: 3px #DBC0A0 groove;
        background-color: #FFE4C4;
    }  
    
     .error {
        border: 3px #C44F38 groove;
        background-color:#FFC0A9;
    }  
  
</style>
<div class="wrapper">
    <span class="tooltip"></span>
</div>    
`
export const inputTemplate = document.createElement('template');
inputTemplate.innerHTML = `
<style>
    
    .wrapper{
     height: 80px;
     margin: 10px 0 10px 0;
     
    }
    
    .left-column{
        width: 80%;
        float: left;
    }

    .right-column{
        /*float: right;*/
        margin: 320px;
        display: table-cell;
        vertical-align: middle;
        text-align: center;
        height: 80px;
        width: 20%;
    }
    
    textarea{
    box-sizing: border-box;
    height: 80px;
    width: 100%;
    padding: 10px;
    margin: 0;
    border: none;
    outline: none;
    resize: none;
    background: inherit;
    font: inherit;
    border-radius: 10px;
        border: 3px #B99E7E groove;  
        box-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        background: #FFE4C4;
}

textarea:hover {
    background: #F2D7B7;
}
/*
.left-column:hover{
background: #F2D7B7;
}*/
    
</style>
    
    <div class="wrapper">
        <div class="left-column">
            <textarea ></textarea>
        </div>
        <div class="right-column"></div>
    </div>

`

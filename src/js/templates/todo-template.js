export const todoTemplate = document.createElement('template');
todoTemplate.innerHTML = `

<style>
    ul{
    list-style-type: none;
    }
    .left-column{
    margin-left: 0;
        float: left;
        width: 70%;
        outline: blue 1px groove;
    }
    .right-column{
        width: 30%;
        float: right;
        outline: blue 1px groove;
    }
    h1{
        text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
        
    }
    .header {
        position: relative;
    }
    .sign-out-wrapper {
        position: absolute;
        right: 10px;
        top: 10px;
    }
    
</style>
    <div class="header">
        <h1>Todo Application</h1>
        <div class="sign-out-wrapper"></div>
    </div>
    <div class="left-column">
        <div class="input-wrapper"></div>
        <div class="filter-wrapper"></div>
        <div class="todo-list-wrapper"></div>
    </div>
    <div class="right-column"></div>
`
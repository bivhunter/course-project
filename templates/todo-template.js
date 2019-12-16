export const todoTemplate = document.createElement('template');
todoTemplate = `

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
    
</style>
    <div class="header"><h1>Todo Application</h1></div>
    <div class="left-column">
        <div class="input-wrapper"></div>
        <div class="filter-wrapper"></div>
        <div class="todo-list-wrapper"></div>
    </div>
    <div class="right-column"></div>
`
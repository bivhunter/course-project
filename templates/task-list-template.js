export const taskListTemplate = document.createElement('template');
taskListTemplate.innerHTML = `
 <style>
    ul{
    list-style-type: none;
    margin: 0;
    padding: 0;
}

li{
    height: 60px;
    margin: 0;
    border-width: 2px;
    border-color: rgb(163, 163, 92) rgb(42, 118, 118) rgb(42, 118, 118) rgb(163, 163, 92);
    border-style: groove ridge ridge groove;
}

my-component-task, my-component-textarea{
    height: 100%;
    width: 100%;
    display: block;
}

my-component-task[data-completed = "true"]{
    background: #81FFD6;
}

my-component-task:hover[data-completed = "true"]{
    background: #68E8BD;
}

my-component-task[data-completed = "false"]{
    background: #FFC0A9;
}

my-component-task:hover[data-completed = "false"]{
    background: #EA755E;
}

my-component-textarea[data-completed = "false"]{
    background: #EA755E;
}

my-component-textarea[data-completed = "true"]{
    background: #68E8BD;
}

</style>
    <div>
    <ul></ul>
</div>

`
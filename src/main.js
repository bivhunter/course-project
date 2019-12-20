import './css/style.css';
import {
    MainComponent
} from "./js/components/MainComponent.js";



if(typeof(module.hot) !== 'undefined') {
    module.hot.accept() // eslint-disable-line no-undef
}

console.log('init main.js')

//const application = document.getElementById('app');

const application = new MainComponent({
    anchor : document.body
});


/*
const todoComponent = new TodoComponent({
    eventService,
    actionService,
    anchor: div,
    state: {
        todoView: [{
            title: 'No tasks'
        }],
        countTasks: {all: 0, completed: 0, notCompleted: 0},
    },
});
*/


//const div = document.createElement('div');
//div.appendChild(todoComponent);



/*
const generateId = () => String(Math.round(Date.now() * Math.random()));



const todo1 = new TaskComponent({
    name: 'todo1',
    id: generateId(),
});

const todo2 = document.createElement('my-component-task');
todo2.props = {
    name: 'todo2',
    id: generateId(),
};

div.appendChild(todo1);
div.appendChild(todo2);
*/


/*dataService.getData()
    .then((data) => {
        console.log(data);
    });*/

/*

setTimeout(() => {
    todo2.remove();
}, 3000);
*/
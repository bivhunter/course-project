export function createReducers() {
    return {
        'CHANGE_ROUTE' : (route, state, message) => {
            return { ...state, ...route, message: message }
        },
        'INIT_TODO': (payLoad, state, message) => {
            return {
                ...state,
                todoList: [...payLoad],
                todoView: [...payLoad],
                filterMethod: "allTasks",
                countTasks: calculateTasks([...payLoad]),
                message: message,
            }
        },
        'ADD_TODO': (payLoad, state, message) => {
            const todoList = [payLoad, ...state.todoList];
            return {
                ...state,
                todoList: todoList,
                todoView: applyFilter(todoList, state.filterMethod),
                countTasks: calculateTasks(todoList),
                message: message,
            }
        },
        'DELETE_TODO': (payLoad, state, message) => {
            const todoList = [...state.todoList.filter((item) => item._id !== payLoad)];
            return {
                ...state,
                todoList: todoList,
                todoView: applyFilter(todoList, state.filterMethod),
                countTasks: calculateTasks(todoList),
                message: message
            }
        },
        'CHANGE_TODO': (payload, state, message) => {
            const todoList = [...state.todoList.map((item) => {
                if (item._id === payload._id) {
                    return payload;
                }
                return item;
            })];
            return {
                ...state,
                todoList: todoList,
                todoView: applyFilter(todoList, state.filterMethod),
                countTasks: calculateTasks(todoList),
                message: message
            }
        },
        'FILTER': (method, state, message) => {
            return {
                ...state,
                filterMethod: method,
                todoView: applyFilter(state.todoList, method),
                message: message
            }
        },
        'ERROR' : (payload, state, message) => {
            return {
                ...state,
                countTasks: calculateTasks(state.taskList),
                message: message
            }
        }


    }
}

function applyFilter(todoList, method) {
    switch (method) {
        case 'allTasks':
            return [...todoList];
            break;
        case 'doneTasks':
            return [...todoList.filter(item => item.completed)];
            break;
        case 'notDoneTasks':
            return [...todoList.filter(item => !item.completed)];
            break;
    }
}

function calculateTasks(tasks) {
    const taskList = tasks || [];
    const allTasksNumber = taskList.length;
    let doneTasksNumber = 0;
    let notDoneTasksNumber = 0;

    taskList.forEach((task) => {
        if (task.completed) {
            doneTasksNumber++;
        } else {
            notDoneTasksNumber++;
        }
    });

    return {
        all: allTasksNumber,
        completed: doneTasksNumber,
        notCompleted: notDoneTasksNumber
    };
}
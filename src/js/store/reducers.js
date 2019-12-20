export function createReducers() {
    return {
        'CHANGE_ROUTE' : (payload, state) => {
            return { ...state, ...payload }
        },
        'INIT_TODO': (payLoad, state) => {
            return {
                ...state,
                todoList: [...payLoad],
                todoView: [...payLoad],
                filterMethod: "allTasks",
                countTasks: calculateTasks([...payLoad]),
            }
        },
        'ADD_TODO': (payLoad, state) => {
            const todoList = [payLoad, ...state.todoList];
            return {
                ...state,
                todoList: todoList,
                todoView: applyFilter(todoList, state.filterMethod),
                countTasks: calculateTasks(todoList),
            }
        },
        'DELETE_TODO': (payLoad, state) => {
            const todoList = [...state.todoList.filter((item) => item._id !== payLoad)];
            return {
                ...state,
                todoList: todoList,
                todoView: applyFilter(todoList, state.filterMethod),
                countTasks: calculateTasks(todoList),
            }
        },
        'CHANGE_TODO': (payload, state) => {
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
            }
        },
        'FILTER': (method, state) => {
            return {
                ...state,
                filterMethod: method,
                todoView: applyFilter(state.todoList, method),
            }
        },
        'SIGN_IN': (token, state) => {
            return {
                ...state,
                token: token,
                route: 'todo'
            }
        },
        'SIGN_OUT': (payload, sate) => {
            return {
                ...sate,
                route: 'login'
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

function calculateTasks(taskList) {
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
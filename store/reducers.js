export function createReducers() {
    return {
        'INIT_STATE': (payLoad, state) => {
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
            const todoList = [...state.todoList.filter((item) => item.id !== payLoad)];
            return {
                ...state,
                todoList: todoList,
                todoView: applyFilter(todoList, state.filterMethod),
                countTasks: calculateTasks(todoList),
            }
        },
        'CHANGE_TODO': (payload, state) => {
            const todoList = [...state.todoList.map((item) => {
                if (item.id === payload.id) {
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

function calculateTasks(taksList) {
    const allTasksNumber = taskList.length;
    const doneTasksNumber = 0;
    const notDoneTasksNumber = 0;

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
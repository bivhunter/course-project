export function createReducers() {
    return {
        'INIT_STATE' : (payLoad, state) => {
            return {
                ...state,
                todoList: [...payLoad],
                todoView: [...payLoad],
                filterMethod: "allTasks"
            }
        },
        'ADD_TODO': (payLoad, state) => {
            return {
                ...state,
                todoList: [payLoad, ...state.todoList],
                todoView: applyFilter(state, state.filterMethod),
            }
        },
        'DELETE_TODO': (payLoad, state) => {
            return {
                ...state,
                todoList: [...state.todoList.filter((item) => item.id !== payLoad)],
                todoView: applyFilter(state, state.filterMethod),
            }
        },
        'CHANGE_TODO': (payload, state) => {
            return {
                ...state,
                todoList: [...state.todoList.map((item) => {
                    if(item.id === payload.id) {
                        return payload;
                    }
                    return item;
                })],
                todoView: applyFilter(state, state.filterMethod),
            }
        },
        'FILTER': (method, state) => {
            return {
                ...state,
                filterMethod: method,
                todoView: applyFilter(state, method),
            }
        }

    }
}

function applyFilter( state, method) {
    switch (method) {
        case 'allTasks':
            return [...state.todoList];
            break;
        case 'doneTasks':
            return [...state.todoList.filter(item => item.completed)];
            break;
        case 'notDoneTasks':
            return [...state.todoList.filter(item => !item.completed)];
            break;
    }
}




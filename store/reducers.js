export function createReducers() {
    return {
        'INIT_STORE' : (payLoad, state) => {
            return {
                ...state,
                todoList: [...payLoad],
                todoView: [...payLoad]
            }
        },
        'ADD_TODO': (payLoad, state) => {
            return {
                ...state,
                todoList: [payLoad, ...state.todoList],
                todoView: [...state.todoView],
            }
        },
        removeItem: (payLoad, state) => {
            return {
                ...state,
                todo: [
                    ...state.slice(0, payLoad.id),
                    ...state.slice(payLoad.id + 1, state.todo.length)
                ]
            }
        }

    }
}




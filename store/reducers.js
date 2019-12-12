export function createReducers() {
    return {
        'INIT_STATE' : (payLoad, state) => {
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
                todoView: [payLoad, ...state.todoView],
            }
        },
        'DELETE_TODO': (payLoad, state) => {
            return {
                ...state,
                todoList: [...state.todoList.filter((item) => item.id !== payLoad)],
                todoView: [...state.todoView.filter((item) => item.id !== payLoad)],
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
                todoView: [...state.todoView.map((item) => {
                    if(item.id === payload.id) {
                        return payload;
                    }
                    return item;
                })],
            }
        }

    }
}




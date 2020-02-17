//accepts actions, handles it and send result to store

import { routeService } from "./RouteService.js";
import { requestService } from "./RequestService_DB.js";
import { store } from "../store/Store.js";

class ActionService {
    constructor() {
        this.initHandlers();
    }

    initHandlers() {
        this.handlers = {
            'addTask': (text) => this.addTask({
                text: text,
                completed: false,
            }),
            'initApplication': () => this.initApplication(),
            'initTodoComponent': () => this.getTaskList(),

            'deletedTask': (id) => this.deleteTask(id),
            'doneTask': (task) => this.changeTaskCompletedStatus(task),
            'startEditTask': (task) => this.changeTaskEditingMode({ ...task,
                editing: true
            }),
            'endEditTask': (task) => {
                delete task.editing;
                this.changeTaskEditingMode({ ...task
                });
            },

            'allFilter': () => this.filterTask('allTasks'),
            'doneFilter': () => this.filterTask('doneTasks'),
            'notDoneFilter': () => this.filterTask('notDoneTasks'),

            'signIn': (data) => this.signIn(data),
            'signOut': () => this.signOut(),
            'signUp': (data) => this.signUp(data),

            'changeRoute': (routeName) => {
                const route = routeService.changeRoute(routeName);
                this.changeRoute(route, {});
            }

        }

    }

    dispatch(action, payload) {
        if (this.handlers[action]) {
            this.handlers[action](payload);
        }
    }

    getTaskList() {
        requestService.get()
            .then(data => store.dispatch('INIT_TODO', data, { }))
            .catch(() => {
                store.dispatch('ERROR', [], {
                   text: 'Server not response, try again',
                   status: 'error'
                });
            })
    }

    addTask(task) {
        requestService.post(task)
            .then(data => {
                store.dispatch('ADD_TODO', data, {
                    text: 'Task successfully added',
                    status: 'done'
                });
            })
            .catch(error => error.then(res => {
                store.dispatch('ERROR', [], {
                    text: res.error,
                    status: 'error'
                });
        }));
    }

    deleteTask(id) {
        requestService.delete(id)
            .then(() => store.dispatch('DELETE_TODO', id, {
                text: 'Task successfully deleted',
                status: 'done'
            }))
            .catch(() => {
                store.dispatch('ERROR', '', {
                    text: 'Server not response, wait please',
                    status: 'error'
                });
            });
    }

    changeTaskCompletedStatus( task ) {
        requestService.put( { ...task, completed: !task.completed } )
            .then( ( task ) => {
                let message;
                if ( task.completed ) {
                    message = {
                        text: 'Task completed',
                        status: 'done'
                    }
                } else {
                    message = {
                        text: 'Task not completed',
                        status: 'done'
                    }
                }
                store.dispatch( 'CHANGE_TODO', task, message);
            } )
            .catch(() => {
                store.dispatch('ERROR', [], {
                    text: 'Server not response, wait please',
                    status: 'error'
                });
            });
    }

    changeTaskEditingMode(task) {
        requestService.put( { ...task} )
            .then( ( task ) => {
                if(task.editing) {
                    store.dispatch( 'CHANGE_TODO', task, {
                        text: 'Start editing',
                        status: 'warn'
                    } );
                } else {
                    store.dispatch( 'CHANGE_TODO', task, {
                        text: 'End editing',
                        status: 'done'
                    } );
                }
            } )
            .catch(() => {
                store.dispatch('ERROR', [], {
                    text: 'Server not response, wait please',
                    status: 'error'
                });
            });

    }

    filterTask(method) {
        store.dispatch('FILTER', method, {
            text: 'Task list filtered out',
            status: 'done'
        });
    }

    signIn(data) {
        requestService.signIn(data)
            .then(res => {
                localStorage.setItem('token', res.token);
                requestService.token = res.token;
                const route = routeService.changeRoute('todo');
                this.changeRoute(route, {
                    text: 'Logged in',
                    status: 'done'
                });
            })
            .catch(error => error.then(res => {
                store.dispatch('ERROR', [], {
                    text: res.error,
                    status: 'error'
                });
            }));
    }

    signOut() {
        localStorage.removeItem('token');
        const route = routeService.changeRoute('login');
        this.changeRoute(route, {
            text: 'Logged out',
            status: 'done'
        });
``    }

    signUp(data) {
        requestService.signUp(data)
            .then(res => {
                localStorage.setItem('token', res.token);
                requestService.token = res.token;
                const route = routeService.changeRoute('todo');
                this.changeRoute(route, {
                    text: "Successfully registered",
                    status: 'done'
                });
            })
            .catch(error => error.then(res => {
                store.dispatch('ERROR', [], {
                    text: res.error,
                    status: 'error'
                });
            }));
    }

    initApplication() {
        let route = routeService.changeRoute('login');
        requestService.checkAuthorization()
            .then(() => {
                route = routeService.changeRoute('todo');
                this.changeRoute(route, {
                    text: 'Logged in',
                    status: 'done'
                });
            })
            .catch(() => {
               this.changeRoute(route, {
                   text: 'Login, Please',
                   status: 'warn'
               });
            });
    }

    changeRoute(route, message) {
        store.dispatch('CHANGE_ROUTE', { route } , message);
    }
}

export const actionService = new ActionService();
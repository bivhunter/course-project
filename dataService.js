import {eventBus} from "./eventService.js";

class DataService {
    constructor(url) {
        this.url = url;
        this.onInit();
    }

    onInit(){
        this.addListeners();
    }

    addListeners() {
        eventBus.subscribe('todoConnected', () => {
            this.getData()
        });

        eventBus.subscribe('deletedTask', (id) => {
            this.deleteData(id);
        });

        eventBus.subscribe('changeTask', (task) => {
            this.putData(task);
        });

        eventBus.subscribe('todoTask', (task) => {
            task.completed = !task.completed;
            this.putData(task);
        });

        eventBus.subscribe('addTask', (title) => {
           const task = this.createTask(title);
           this.addData(task);
        });
    }

    createTask(title) {
        return {
            title: title,
            completed: false
        }
    }

    addData(task) {
        fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("File not found");
                }
                console.log(response);
                return response.json();
            })
            .then((data) => {
                this.data.unshift(data);
                eventBus.publish('responseSuccessful', this.data);
            });

    }

    putData(task) {
        fetch( `${this.url}/${task.id}`, {
            method: 'PUT',
            body: JSON.stringify( task ),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        } )
            .then( ( response ) => {
                if ( !response.ok ) {
                    throw new Error( "File not found" );
                }
                return response.json();

            } )
            .then(response => {
                eventBus.publish('responseSuccessful', this.changeTask(response));
            });
    }

    getData() {
        fetch(this.url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("File not found");
                }

                return response.json();
            })
            .then((data) => {
                this.data = data;
                data.forEach((item) => {
                    item.name = item.title;
                });
                eventBus.publish('responseSuccessful', data);
            })
            .catch((error) => console.log(error));
    }

    deleteData( id ) {
        fetch( `${this.url}/${id}`, {
            method: 'DELETE',
        } )
            .then( ( response ) => {
                if ( !response.ok ) {
                    throw new Error( "File not found" );
                }
            } )
            .then((data) => {
                this.data = this.data.filter((item) => {
                    return item.id !== id;
                });
                console.log(this.data);
                eventBus.publish('responseSuccessful', this.data);
            });
    }

    changeTask(task) {
        return this.data.map((item) => {
           if(task.id === item.id) {
               return task;
           }
           return item;
        });
    }
}

const url = 'https://jsonplaceholder.typicode.com/todos/';
export const dataService = new DataService(url);
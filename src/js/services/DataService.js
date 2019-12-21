import {eventBus} from "./EventService.js";
import {EventService} from "./EventService.js";

class DataService {
    constructor(url) {
        console.log('init dataService');
        this.url = url;
        this.eventService = new EventService();
        this.onInit();

    }

    onInit(){
        this.addListeners();
        this.filterStatus = 'all'
    }



    addListeners() {
        this.addFilterListeners();
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

    addFilterListeners() {
        eventBus.subscribe('allFilter', () => {
            this.filterStatus = 'all';
            this.updateComponents();
        });

        eventBus.subscribe('doneFilter', () => {
            this.filterStatus = 'done';
            this.updateComponents()
        });

        eventBus.subscribe('notDoneFilter', () => {
            this.filterStatus = 'notDone';
            this.updateComponents()
        });

    }

    updateComponents() {
        eventBus.publish('changedData', this.data);
        eventBus.publish('responseSuccessful', this.filterData());
    }

    filterData() {
        let filteredData;
        switch (this.filterStatus) {
            case 'all':
                filteredData = this.data;
                break;
            case 'done':
                filteredData = this.data.filter((item) => {
                    return item.completed;
                });
                break;
            case 'notDone':
                filteredData = this.data.filter((item) => {
                    return !item.completed;
                });
        }
        return filteredData;
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
                this.updateComponents();
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
                this.changeTask(response);
                this.updateComponents();
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
                this.updateComponents();
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
                this.updateComponents();
            });
    }

    changeTask(task) {
       this.data.map((item) => {
           if(task.id === item.id) {
               return task;
           }
           return item;
        });
    }
}

const url = 'https://jsonplaceholder.typicode.com/todos/';
export const dataService = new DataService(url);
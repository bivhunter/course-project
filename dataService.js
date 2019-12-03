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
                .then((data) => {
                    this.data = data;
                    data.forEach((item) => {
                        item.name = item.title;
                    });
                    console.log(data);
                    eventBus.publish('responseSuccessful', data);
                }).catch((error) => {
                    console.log(error);
            });
        });

        eventBus.subscribe('deleteTask', (id) => {
            this.lastTaskId = id;
            this.data = this.data.filter((item) => {
               item.id !== id;
            });
            this.deleteData();
        });

        eventBus.subscribe('todoTask', (id) => {
            this.lastTaskId = id;
            this.putData();
        });
    }

    putData() {
        fetch(`${this.url}/${this.lastTaskId}`, {
            method: 'PATCH',
            body: JSON.stringify({
                completed: true
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("File not found");
                }
                eventBus.publish('patchData', this.lastTaskId);
            })
    }

    getData() {
        return fetch(this.url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("File not found");
                }

                return response.json();
            })
            .catch((error) => console.log(error));

    }

    deleteData() {
        return fetch(this.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(this.data)
        }).then((response) => {
            if (!response.ok) {
                throw new Error("File not found");
            }
            eventBus.publish('deleteData', this.lastTaskId);
        })
    }
}

const url = 'https://jsonplaceholder.typicode.com/todos/';
export const dataService = new DataService(url);
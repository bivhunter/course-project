import {dbSe}
const url = 'https://jsonplaceholder.typicode.com';
class RequestService{
    constructor(url) {
        this.url = url;
        this.token = localStorage.getItem('token');
    }

    checkAuthorization() {
       return new Promise((resolve, reject) => {
           if (this.token) {
               resolve(this.token);
           } else {
               reject();
           }
       });
    }

    post(task) {
        return fetch(`${this.url}/todos`, {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                'Authorization': this.token
            }
        })
            .then((response) => {
                if (!response.ok) {
                    throw response.json();
                }
                return response.json();
            });
    }

    get() {
        return fetch(`${this.url}/todos`, {
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                'Authorization': this.token,
            }
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('error');
                }
                return response.json();
            });
    }

    delete(id) {
        return fetch( `${this.url}/todos/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                'Authorization': this.token
            }
        } )
            .then( ( response ) => {
                if ( !response.ok ) {
                    throw new Error( "File not found" );
                }
            } );
    }

    put(task) {
        return fetch( `${this.url}/todos/${task._id}`, {
            method: 'PUT',
            body: JSON.stringify( task ),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                'Authorization': this.token
            }
        } )
            .then( ( response ) => {
                if ( !response.ok ) {
                    throw response.json();
                }
                return response.json();
            } );

    }

    signIn(data) {
        return fetch( `${this.url}/login`, {
            method: 'POST',
            body: JSON.stringify( data ),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        } )
            .then( ( response ) => {
                if ( !response.ok ) {
                    throw response.json();
                }
                return response.json();
            } );
    }

    signUp(data) {
        if(!data.username) {
            return Promise.reject("Enter username");
        }
        if(!data.email) {
            return Promise.reject("Enter email");
        }
        if(!data.password) {
            return Promise.reject("Enter password");
        }


    }
}

export const requestService = new RequestService(url);
export class RequestService{
    constructor(url) {
        this.url = url;
        console.log('init requestService');
    }

    post(task) {
        return fetch(this.url, {
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
                return response.json();
            });
    }

    get() {
        console.log('get');
        return fetch(this.url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("File not found");
                }
                return response.json();
            });
    }

    delete(id) {
       return fetch( `${this.url}/${id}`, {
            method: 'DELETE',
        } )
            .then( ( response ) => {
                if ( !response.ok ) {
                    throw new Error( "File not found" );
                }
            } );
    }

    put(task) {
        return fetch( `${this.url}/${task.id}`, {
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
            } );

    }


}
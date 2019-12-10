export class RequestService{
    constructor(url) {
        this.url = url;
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
        return fetch(this.url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("File not found");
                }
                return response.json();
            });
    }

}
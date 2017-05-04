import { inject } from "aurelia-framework";
import { HttpClient } from "aurelia-http-client";

let baseUrl = "/movies.json"

@inject(HttpClient)
export class MovieData {

    constructor(httpClient) {
        this.http = httpClient;
    }

    getAll() {
        return this.http.get(baseUrl)
            .then(response => {
                return response.content;
            });
    }

    getById(id) {
        var movie = {};

        return this.getAll().then(movies => {
            movie = movies.find(x => {
                return x.id == id;
            });

            return movie;
        });
    }

}
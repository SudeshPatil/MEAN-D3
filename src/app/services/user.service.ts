import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ServiceForLogin{
    constructor(private _http: Http) { }

    getData(login:string) {
        return this._http.get(`https://api.github.com/users/${login}`)
            .pipe(map(data => {
                console.log("I CAN SEE DATA HERE: ", data.json());
                return data.json();
         }))
    }
}


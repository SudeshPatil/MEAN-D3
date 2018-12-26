import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
// import { Subject } from 'rxjs/Subject';


@Injectable()
export class MyHttpService {
    private subject;
    bSubject = new BehaviorSubject({}); 
      constructor(private _http: Http) { }

    getData() {
        // alert('service getData')
        this._http.get('https://api.github.com/search/users?q=eric')
        .subscribe(data => {
            // console.log("I CAN SEE DATA HERE: ", data.json());
            // return data.json();
            // this.subject.next({ data:  data.json() });
            let k = data.json()
            this.bSubject.next(k);
        })
            // .pipe(map(data => {
            //     console.log("I CAN SEE DATA HERE: ", data.json());
            //     // return data.json();
            //     // this.subject.next({ data:  data.json() });
            //     let k = data.json()
            //     alert('inside api')
            //     debugger
            //     // this.bSubject.next(k);
            // }))
            // console.log("in service"+this.subject);
        // return this.subject;    
    }
}


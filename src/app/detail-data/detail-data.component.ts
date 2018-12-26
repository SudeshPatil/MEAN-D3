import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { MyHttpService } from '../services/app.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-detail-data',
  templateUrl: './detail-data.component.html',
  styleUrls: ['./detail-data.component.css']
})
export class DetailDataComponent implements OnInit {

  posts:{};
  items:any[];
  total_count:0;
  flag = false;
  count=0;

  constructor(private myHttp: MyHttpService, private router: Router) {
    // this.myHttp.getData();

    this.myHttp.bSubject.subscribe(data => {
        this.items = data['items']
        this.total_count = data['total_count']
    });
  }
  displayData(myHttp) {
    this.flag=!this.flag;
    this.myHttp.getData();
  }

  // redirect(i) {
  //   this.router.navigate(['/UserInfo'], { queryParams: { id : i} } );
  //   console.log("hello" + i);
  // }

  ngOnInit() {
  }

}

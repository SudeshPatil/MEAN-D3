import { Component, OnInit } from '@angular/core';
import {ActivatedRoute ,  Router} from "@angular/router";
import { ServiceForLogin } from '../services/user.service'


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
   login:string ;
   sub;
  score :string;
   posts:{};
   items:any[];

   constructor(private route: ActivatedRoute,
    private myHttp: ServiceForLogin,
    private router: Router) {}

  ngOnInit() {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.login =  params["id"] || 0;
        this.score =  params["id1"] || 0;
      });
      this.myHttp.getData(this.login).subscribe(
        data => {
          this.posts = data;
        }
      );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

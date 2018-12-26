import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MyHttpService } from './services/app.service';
import { UserInfoComponent } from './user-info/user-info.component';
import { RouterModule } from '@angular/router';
import { DetailDataComponent } from './detail-data/detail-data.component'
import { ServiceForLogin } from './services/user.service';
import { FollowersComponent } from './followers/followers.component'

@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent,
    DetailDataComponent,
    FollowersComponent
  ],
  imports: [
    BrowserModule, HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: DetailDataComponent
      },
      {
        path: 'UserInfo',
        component: UserInfoComponent
      },
      {
        path : 'followers',
        component : FollowersComponent 
      }
    ])
  ],
  providers: [MyHttpService, ServiceForLogin],
  bootstrap: [AppComponent]
})
export class AppModule { }



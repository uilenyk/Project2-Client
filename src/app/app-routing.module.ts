import { MessagesComponent } from './components/messages/messages.component';
import { LoginComponent } from './components/login/login.component';
import { MarketPageComponent } from './components/market-page/market-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { UserlistingsComponent } from './components/userlistings/userlistings.component';
import { PhotoComponent } from './components/photo/photo.component';
import { RouteAuth } from 'src/app/routeAuth';
import { switchMap } from 'rxjs/operators';

const routes: Routes = [

  {
    path: '',
    component: MarketPageComponent
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'marketPage',
    component: MarketPageComponent
  }, {
    path: 'signUp',
    component: SignupComponent
  }, {
      path: 'userlistings',
      component: UserlistingsComponent
  }, {
      path: 'messages',
      component: MessagesComponent
  }
  // },  {
  //   path: 'user-account',
  //   component: UserAccountComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

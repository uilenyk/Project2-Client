import { LoginComponent } from './components/login/login.component';
import { MarketPageComponent } from './components/market-page/market-page.component';
import { NgModule } from '@angular/core';
import { ActivatedRoute, Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { UserlistingsComponent } from './components/userlistings/userlistings.component';
import { PhotoComponent } from './components/photo/photo.component';
import { switchMap } from 'rxjs/operators';
import { UserAccountComponent } from './components/user-account/user-account.component';


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
      path: 'photo',
      component: PhotoComponent
  }, {
      path: 'user-account',
      component: UserAccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

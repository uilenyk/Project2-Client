import { LoginComponent } from './components/login/login.component';
import { MarketPageComponent } from './components/market-page/market-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { UserlistingsComponent } from './components/userlistings/userlistings.component';


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
    },
    {
      path: 'userlistings',
      component: UserlistingsComponent
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

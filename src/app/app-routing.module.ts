import { ListingComponent } from './components/listing/listing.component';
import { LoginComponent } from './components/login/login.component';
import { MarketPageComponent } from './components/market-page/market-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';

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
      },{
    path: 'signup',
    component: SignupComponent
    },
    {
      path: 'listings',
      component: ListingComponent
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

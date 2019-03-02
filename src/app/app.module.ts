import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { LandingComponent } from './components/landing/landing.component';
import { MarketPageComponent } from './components/market-page/market-page.component';
import { ListingComponent } from './components/listing/listing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    LandingComponent,
    MarketPageComponent,
    ListingComponent,
    NavbarComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { MarketPageComponent } from './components/market-page/market-page.component';
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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { SearchComponent } from './components/search/search.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkTableModule } from '@angular/cdk/table';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserlistingsComponent } from './components/userlistings/userlistings.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { PhotoComponent } from './components/photo/photo.component';
import { PhotoService } from './services/photo.service';
import { MessagesComponent } from './components/messages/messages.component';
// import { UserAccountComponent } from './components/user-account/user-account.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    LandingComponent,
    MarketPageComponent,
    NavbarComponent,
    UserlistingsComponent,
    AddListingComponent,
    PhotoComponent,
    MessagesComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CookieService, PhotoService],
  bootstrap: [AppComponent],
  exports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CdkTableModule,
    FormsModule,
    HttpClientModule
  ]
})

export class AppModule { }

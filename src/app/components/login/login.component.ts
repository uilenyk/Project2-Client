import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { allocExpando } from '@angular/core/src/render3/instructions';
import { NgIf } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginService } from '../../services/login-service.service';
import { MarketPlaceUserDataService } from '../../services/market-place-user-data.service';
import { CookieService } from 'ngx-cookie-service';
import { MarketPlaceUser } from '../../models/market-place-user';
import { Router } from '@angular/router';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    @Output()
    showSignEvent = new EventEmitter<object>();
    showSignIn = true;
    private loginForm: FormGroup;

    constructor(
        private loginService: LoginService,
        private marketPlaceUserDataService: MarketPlaceUserDataService,
        private router: Router,
        private cookie: CookieService) { }

    ngOnInit() {
        this.cookie.deleteAll();
        this.loginForm = this.createLoginForm();
    }

    onSubmit() {
        const form = this.loginForm;
        if (form.valid) {
            this.loginService.login(form.value).subscribe(
                (response) => {
                    console.log(response);
                    const marketPlaceUser = response;
                    this.setMarketPlaceUser(marketPlaceUser);
                    this.showSignIn = false;
                    this.showSignEvent.emit({ showSignIn: this.showSignIn, firstname: response.firstname });
                    this.cookie.set('firstname', response.firstname);
                    this.cookie.set('mpuid', response.id);
                    this.router.navigateByUrl('marketPage');
                });
        } else {
            alert('Invalid form!');
        }
    }

    private createLoginForm(): FormGroup {
        return new FormGroup({
            email: new FormControl(),
            password: new FormControl()
        });
    }

    private setMarketPlaceUser(marketPlaceUser: MarketPlaceUser) {

        this.marketPlaceUserDataService.changeMarketPlaceUser(marketPlaceUser);

    }

}

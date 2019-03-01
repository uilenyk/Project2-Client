import { Component, OnInit } from '@angular/core';
import { allocExpando } from '@angular/core/src/render3/instructions';
import { NgIf } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginService } from '../../services/login-service.service';
import { MarketPlaceUserDataService } from '../../services/market-place-user-data.service';

import { MarketPlaceUser } from '../../models/market-place-user';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    private loginForm: FormGroup;

    constructor(
        private loginService: LoginService,
        private marketPlaceUserDataService: MarketPlaceUserDataService) { }

    ngOnInit() {
        this.loginForm = this.createLoginForm();
    }

    onSubmit() {
        const formData = this.loginForm.value;
        if (formData.valid) {
            this.loginService.login(formData).subscribe(
                (response) => {
                    const marketPlaceUser = response;
                    this.setMarketPlaceUser(marketPlaceUser);
                });
        } else {
            console.log('Invalid Form!');
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

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from '../../services/login-service.service';
import { MarketPlaceUserDataService } from '../../services/market-place-user-data.service';

import { MarketPlaceUser } from '../../models/market-place-user';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;

    constructor(
        private router: Router,
        private loginService: LoginService,
        private marketPlaceUserDataService: MarketPlaceUserDataService) { }

    ngOnInit() {
        this.loginForm = this.createLoginForm();
    }

    onSubmit() {
        const form = this.loginForm;
        if (form.valid) {
            /**
             * Fetch user from the database
             */
            const userData = form.value;
            this.loginService.login(userData).subscribe(
                (response) => {
                    console.log(response);
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

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from '../../services/login-service.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginFormGroup: FormGroup;

    constructor(
        private loginService: LoginService) { }

    ngOnInit() {
        this.loginFormGroup = this.createLoginFormGroup();
    }

    onSubmit() {
        const formGroup = this.loginFormGroup;
        if (formGroup.valid) {
            const loginRequest = formGroup.value;
            this.loginService.login(loginRequest).subscribe(
                (response) => {
                    console.log(response);
                });
        } else {
            console.log('Invalid Form!');
        }
    }

    private createLoginFormGroup(): FormGroup {
        return new FormGroup({
            email: new FormControl(),
            password: new FormControl()
        });
    }

}

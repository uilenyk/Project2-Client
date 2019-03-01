import { Component, OnInit } from '@angular/core';
import { allocExpando } from '@angular/core/src/render3/instructions';
import { NgIf } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { LoginService } from '../../services/login-service.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    private loginForm: FormGroup;

    constructor(private loginService: LoginService) { }

    ngOnInit() {
        this.loginForm = this.createLoginForm();
    }

    onSubmit() {
        if (this.loginForm.valid) {
            const formData = this.loginForm.value;
            this.loginService.login(formData);
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

}

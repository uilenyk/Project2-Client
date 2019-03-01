import { Component, OnInit } from '@angular/core';
import { allocExpando } from '@angular/core/src/render3/instructions';
import { NgIf } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  workingEmail: string;
  workingPassword: string;

  constructor() { }

  ngOnInit() {

    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
    this.workingEmail = 'abby@aol.com';
    this.workingPassword = 'abby123password';
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form Valid!');
      console.log(this.loginForm.value);
    } else {
      console.log('INVALID FORM REEEEEEEE');
    }
  }

  login() {
    console.log(this.loginForm);
  }
}

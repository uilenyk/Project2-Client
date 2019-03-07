import { Component, OnInit } from '@angular/core';
import { allocExpando } from '@angular/core/src/render3/instructions';
import { NgIf } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { LoginService } from 'src/app/services/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit() {

    this.signupForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      pseudoName: new FormControl(),
      Address: new FormGroup({
        streetName: new FormControl(),
        streetNumber: new FormControl(),
        city: new FormControl(),
        state: new FormControl(),
        zipCode: new FormControl()
      }),
      phoneNumber: new FormGroup({
        phoneAreaCode: new FormControl(),
        phoneFirstFour: new FormControl(),
        phoneLastThree: new FormControl()
      }),
      creditCard: new FormGroup({
        balance: new FormControl()
      }),
      credential: new FormGroup({
        email: new FormControl(),
        password: new FormControl(),
      }),
    });
  }

  onSubmit() {
    const form = this.signupForm;
    if (form.valid) {
      this.loginService.signUp(form.value).subscribe();
      this.router.navigateByUrl('marketPage');
    } else {
      alert('Invalid form!');
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { allocExpando } from '@angular/core/src/render3/instructions';
import { NgIf } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor() { }

  ngOnInit() {

    this.signupForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      streetName: new FormControl(),
      streetNum: new FormControl(),
      city: new FormControl(),
      country: new FormControl(),
      zipcode: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    });
      }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log('Form Valid!');
      console.log(this.signupForm.value);
    } else {
      console.log('INVALID FORM REEEEEEEE')
    }
  }

  signup() {
    console.log(this.signupForm);
  }
}

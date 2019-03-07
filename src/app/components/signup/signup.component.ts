import { Component, OnInit } from '@angular/core';
import { allocExpando } from '@angular/core/src/render3/instructions';
import { NgIf } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule, Validators, FormGroupName } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { LoginService } from 'src/app/services/login-service.service';
import { Router } from '@angular/router';
import { MarketPlaceUser } from 'src/app/models/market-place-user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  createdUser: MarketPlaceUser;
  constructor(
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
      firstName: new FormControl(),
      lastName: new FormControl(),
      pseudoName: new FormControl(),
      streetName: new FormControl(),
      streetNumber: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      zipcode: new FormControl(),
      phoneAreaCode: new FormControl(),
      phoneFirstFour: new FormControl(),
      phoneLastThree: new FormControl()
    });
  }

  onSubmit() {
    const form = this.signupForm;
    this.createdUser = {
      mpuid: null,
      firstname: this.signupForm.value.firstName,
      lastname: this.signupForm.value.lastName,
      pseudoname: this.signupForm.value.pseudoName,
      address: {
        city: this.signupForm.value.city,
        state: this.signupForm.value.state,
        streetName: this.signupForm.value.streetName,
        streetNumber: this.signupForm.value.streetName,
        zipCode: this.signupForm.value.zipcode
      },
      phoneNumber: {
        id: null,
        areaCodeThree: this.signupForm.value.areaCodeThree,
        blockFour: this.signupForm.value.blockThree,
        blockThree: this.signupForm.value.blockFour
      },
      creditCard: {
        Balance: 0
      },
      newMessage: false
    };
    if (form.valid) {
      this.loginService.signUp(this.createdUser).subscribe();
      this.router.navigateByUrl('marketPage');
    } else {
      alert('Invalid form!');
    }
  }

}

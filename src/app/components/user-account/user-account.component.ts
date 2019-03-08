import { Component, OnInit } from '@angular/core';
import { MarketPlaceUser } from 'src/app/models/market-place-user';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { MarketPlaceUserService } from 'src/app/services/market-place-user.service';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Address } from 'src/app/models/address';
import { PhoneNumber } from 'src/app/models/phonenumber';
import { CreditCard } from 'src/app/models/creditcard';
import { FormGroup, FormControl } from '@angular/forms';
import { MarketPlaceUserDataService } from 'src/app/services/market-place-user-data.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  user;
  updateUser: MarketPlaceUser;
  changeDetails: boolean;
  editUserForm: FormGroup;

  constructor(
    private marketPlaceUserService: MarketPlaceUserService,
    private cookie: CookieService,
    private router: Router,
    private marketPlaceUser: MarketPlaceUserDataService
  ) { }

  ngOnInit() {
    this.marketPlaceUser.currentMarketPlaceUser.subscribe((user) => {
      if (user == null) {
        this.router.navigateByUrl('login');
      }
    });
    this.changeDetails = false;
    this.marketPlaceUserService.getUser(this.cookie.get('mpuid')).subscribe((Response) => {
      this.user = Response;
      console.log(Response);
      this.updateUser = this.user;
    });
    this.editUserForm = new FormGroup({
      mpuid: new FormControl(this.user.mpuid),
      firstName: new FormControl(this.user.firstname),
      lastName: new FormControl(this.user.lastName),
      pseudoName: new FormControl(this.user.pseudoName),
      city: new FormControl(this.user.address.city),
      state: new FormControl(this.user.address.state),
      streetName: new FormControl(this.user.address.street),
      streetNumber: new FormControl(this.user.address.streetNumber),
      zipCode: new FormControl(this.user.address.zipCode),
      phoneid: new FormControl(this.user.phoneNumber.id),
      phoneAreaCode: new FormControl(this.user.phoneNumber.phoneAreaCode),
      phoneFirstFour: new FormControl(this.user.phoneNumber.phoneFirstFour),
      phoneLastThree: new FormControl(this.user.phoneLastThree),
      email: new FormControl(this.user.credential.email),
      password: new FormControl(this.user.credential.password),
      balance: new FormControl(this.user.creditCard.balance)
    });
  }

  editAccount() {
    this.changeDetails = true;
  }

  cancelEdit() {
    this.changeDetails = false;
  }

  addFunds() {
    console.log('TO BE IMPLEMENTED');
  }

  onSubmit() {
    this.updateUser = {
      mpuid: this.editUserForm.value.mpuid,
      firstname: this.editUserForm.value.firstName,
      lastname: this.editUserForm.value.lastName,
      pseudoname: this.editUserForm.value.pseudoName,
      address: {
        city: this.editUserForm.value.city,
        state: this.editUserForm.value.state,
        streetName: this.editUserForm.value.streetName,
        streetNumber: this.editUserForm.value.streetName,
        zipCode: this.editUserForm.value.zipcode
      },
      phoneNumber: {
        id: this.editUserForm.value.phoneid,
        areaCodeThree: this.editUserForm.value.areaCodeThree,
        blockFour: this.editUserForm.value.blockThree,
        blockThree: this.editUserForm.value.blockFour
      },
      creditCard: {
        Balance: this.editUserForm.value.balance
      },
      newMessage: this.editUserForm.value.newMessage
    };
    this.marketPlaceUserService.updateUser(this.updateUser).subscribe((Response) => {
      this.user = Response;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { MarketPlaceUserService } from 'src/app/services/market-place-user.service';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Address } from 'src/app/models/address';
import { PhoneNumber } from 'src/app/models/phonenumber';
import { CreditCard } from 'src/app/models/creditcard';
import { FormGroup, FormControl } from '@angular/forms';
import { MarketPlaceUserDataService } from 'src/app/services/market-place-user-data.service';
import { MarketPlaceUser } from '../../models/market-place-user';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  user: any;
  updateUser: any;
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
        this.router.navigateByUrl('marketPage');
      }
    });
    this.changeDetails = false;
    this.marketPlaceUserService.getUser(this.cookie.get('mpuid')).subscribe((Response) => {
      this.user = Response;
      console.log(Response);
      this.updateUser = this.user;
    });
  }

  editAccount() {
    this.editUserForm = new FormGroup({
      mpuid: new FormControl(this.user.mpuid),
      firstname: new FormControl(this.user.firstname),
      lastname: new FormControl(this.user.lastname),
      pseudoname: new FormControl(this.user.pseudoname),
      city: new FormControl(this.user.address.city),
      state: new FormControl(this.user.address.state),
      streetname: new FormControl(this.user.address.streetname),
      streetnumber: new FormControl(this.user.address.streetnumber),
      zipcode: new FormControl(this.user.address.zipcode),
      areaCodeThree: new FormControl(this.user.phoneNumber.areaCodeThree),
      blockThree: new FormControl(this.user.blockThree),
      blockFour: new FormControl(this.user.phoneNumber.blockFour)
    });
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
      firstname: this.editUserForm.value.firstname,
      lastname: this.editUserForm.value.lastname,
      pseudoname: this.editUserForm.value.pseudoname,
      address: {
        city: this.editUserForm.value.city,
        state: this.editUserForm.value.state,
        streetname: this.editUserForm.value.streetname,
        streetnumber: this.editUserForm.value.streetnumber,
        zipcode: this.editUserForm.value.zipcode
      },
      phoneNumber: {
        id: this.editUserForm.value.phoneid,
        areaCodeThree: this.editUserForm.value.areaCodeThree,
        blockThree: this.editUserForm.value.blockThree,
        blockFour: this.editUserForm.value.blockFour
      },
      creditCard: {
        balance: this.editUserForm.value.balance
      },
      newMessage: this.editUserForm.value.newMessage
    };
    this.marketPlaceUserService.updateUser(this.updateUser).subscribe((Response: MarketPlaceUser) => {
      this.user = Response;
      console.log(Response);
      this.marketPlaceUser.changeMarketPlaceUser(Response);
    });
    this.changeDetails = false;
  }
}

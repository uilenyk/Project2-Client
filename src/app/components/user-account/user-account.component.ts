import { Component, OnInit } from '@angular/core';
import { MarketPlaceUser } from 'src/app/models/market-place-user';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { MarketPlaceUserService } from 'src/app/services/market-place-user.service';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  user;
  updateUser: MarketPlaceUser;
  changeDetails: boolean;

  constructor(private marketPlaceUserService: MarketPlaceUserService,
              private cookie: CookieService,
              private router: Router,
  ) { }

  ngOnInit() {
    this.changeDetails = false;
    this.marketPlaceUserService.getUser(this.cookie.get('mpuid')).subscribe((Response) => {
      this.user = Response;
      console.log(Response);
    });
  }

  editAccount() {
    this.changeDetails = true;
    this.marketPlaceUserService.updateUser(this.user).subscribe((Response) => {
      this.user = Response;
    });

  }

}

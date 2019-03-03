import { Component, OnInit } from '@angular/core';
import { MarketPlaceUser } from 'src/app/models/market-place-user';
import { MarketPlaceUserDataService } from 'src/app/services/market-place-user-data.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  showSignIn = true;
  showSignInView = false;
  username: any;
  marketPlaceUser: MarketPlaceUser;
  constructor(private marketPlaceDataService: MarketPlaceUserDataService,
              private cookie: CookieService,
              private router: Router) {

  }

  signOut()
  {
    this.cookie.deleteAll();
    this.router.navigateByUrl('');
    window.location.reload();

  }

  signIn(){
      if(this.showSignInView == false) {
      this.showSignInView = true;
      }
      else {
        this.showSignInView = false;
      }
  }

  ngOnInit() {
    this.showSignIn = true;
    this.showSignInView = false;
    this.username;
    this.marketPlaceDataService.currentMarketPlaceUser.subscribe(
      (marketPlaceUser) => {
        this.marketPlaceUser = marketPlaceUser;
      });
  }

  recieveShowSignInEvent(object) {
    this.showSignIn = object.showSignIn;
    this.showSignInView = false;
    this.username = object.firstname;
  }
}

import { Component, OnInit } from '@angular/core';
import { MarketPlaceUser } from 'src/app/models/market-place-user';
import { MarketPlaceUserDataService } from 'src/app/services/market-place-user-data.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  showSignIn = true;
  username = this.cookie.get('username');
  marketPlaceUser: MarketPlaceUser;
  constructor(private marketPlaceDataService: MarketPlaceUserDataService,
              private cookie: CookieService) {

  }

 ngOnChange(){
  this.username = this.cookie.get('username');
 }
  ngOnInit() {
    this.username = this.cookie.get('username');
    this.marketPlaceDataService.currentMarketPlaceUser.subscribe(
      (marketPlaceUser) => {
        this.marketPlaceUser = marketPlaceUser;
      });
  }

  recieveShowSignInEvent($event) {
    this.showSignIn = $event;
  }
}

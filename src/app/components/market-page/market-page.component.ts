import { Component, OnInit } from '@angular/core';
import { MarketPlaceUser } from '../../models/market-place-user';
import { MarketPlaceUserDataService } from 'src/app/services/market-place-user-data.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-market-page',
  templateUrl: './market-page.component.html',
  styleUrls: ['./market-page.component.css']
})
export class MarketPageComponent implements OnInit {

  constructor(private marketPlaceDataService: MarketPlaceUserDataService,
              private cookie: CookieService ) {

  }
  username = this.cookie.get('username');
  marketplaceuser: MarketPlaceUser;
  
   
  ngOnInit() {
    this.marketPlaceDataService.currentMarketPlaceUser.subscribe((marketplaceuser) =>
    {
      this.marketplaceuser = marketplaceuser; });
    }

}

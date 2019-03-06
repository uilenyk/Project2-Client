import { ListingsService } from './../../services/listings.service';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { MarketPlaceUserDataService } from 'src/app/services/market-place-user-data.service';

@Component({
  selector: 'app-userlistings',
  templateUrl: './userlistings.component.html',
  styleUrls: ['./userlistings.component.css']
})
export class UserlistingsComponent implements OnInit {
  constructor(private listingService: ListingsService, 
              private cookie: CookieService,
              private router: Router,
              private marketPlaceUser: MarketPlaceUserDataService
              ) { }

  listings: any;
  id: any;
  showAddListing = false;

  recieveAddListingEvent(object) {
    this.showAddListing = object.showAddListing;
  }

  ngOnInit() {
   this.marketPlaceUser.currentMarketPlaceUser.subscribe((user) => {
     if(user == null) {
       this.router.navigateByUrl('login');
   }
   });
    this.id = this.cookie.get('mpuid');
  }

  addListing(){
    this.listings = null;
    this.showAddListing = true;
  }

  getListings() {
    this.listingService.getListings(this.id)
    .subscribe( (payload) => {
      console.log(payload);
      for (const key in payload) {
             if (payload.hasOwnProperty(key)) {
              this.listings = payload;
                }
              }
            },
     (error) => console.log(error));
    }

}

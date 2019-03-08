import { HttpClient } from '@angular/common/http';
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
  constructor
    (private listingService: ListingsService,
      private cookie: CookieService,
      private router: Router,
      private marketPlaceUser: MarketPlaceUserDataService
    ) { }

  listings: any;
  id: any;
  showAddListing = false;
  action: any;
  active = [{ active: 'false' }];


  ngOnInit() {
    this.marketPlaceUser.currentMarketPlaceUser.subscribe((user) => {
      if (user == null) {
        this.router.navigateByUrl('');
      }
    });
    this.id = this.cookie.get('mpuid');
    this.action = ('Update Listing');
  }

  /**
   * 
   * @param listing
   * Change listing from selection
   */
  changeListing(listing: any) {
    console.log(listing);
    const listid = listing.listid;
    const makeInactiveRequest = {
      active: false
    };
    this.listingService.patchListing(listid, makeInactiveRequest).subscribe((response) => {
      if (response.status === 403) {
        console.log('cannot sell to yourself');
      } else if (response.status === 400) {
        console.log('Insufficent funds');
      } else if (response.status === 410) {
        console.log('Sorry but this item has already been sold');
      }
    },
      (err) => {
        console.log(err);
      });
  }

  editListing(listing: any) {

  }

  updateListing(listing: any) {
    if (this.action == '1') {
      this.editListing(listing);
    } else if (this.action == '2') {
      this.changeListing(listing);
    }
  }

  addListing() {
    this.listings = null;
    this.showAddListing = true;
  }

  getListings() {
    this.listingService.getListings(this.id)
      .subscribe((payload) => {
        console.log(payload);
        for (const key in payload) {
          if (payload.hasOwnProperty(key)) {
            this.listings = payload;
          }
        }
      },
        (error) => console.log(error));
  }
  
  recieveAddListingEvent(object) {
    this.showAddListing = object.showAddListing;
  }


}

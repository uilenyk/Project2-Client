import { ListingsService } from './../../services/listings.service';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlistings',
  templateUrl: './userlistings.component.html',
  styleUrls: ['./userlistings.component.css']
})
export class UserlistingsComponent implements OnInit {
  constructor(private listingService: ListingsService, 
              private cookie: CookieService,
              private router: Router,
              ) { }

  listings: any;
  id: any; 
  showAddListing = false;

  ngOnInit() {
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

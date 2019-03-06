import { ListingsService } from 'src/app/services/listings.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MarketPlaceUser } from 'src/app/models/market-place-user';
import { MarketPlaceUserDataService } from 'src/app/services/market-place-user-data.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isDeleted: boolean = false;
  currentTag: string = '';
  maxTags: boolean = false;
  tags: Array<string> = [];
  showSignIn = true;
  showSignInView = false;
  username: any;
  marketPlaceUser: MarketPlaceUser;
  listings: any;
  dataSource;
  displayedColumns = [];

  @ViewChild(MatSort) sort: MatSort;


  constructor(private marketPlaceDataService: MarketPlaceUserDataService,
              private cookie: CookieService,
              private router: Router,
              private listingService: ListingsService) { }

  addListing() {
    this.router.navigateByUrl('userlistings');
  }

  loadHomePage() {
    this.router.navigateByUrl('');
  }
  loadUserListings() {
    this.router.navigateByUrl('userlistings');
  }
  signUp() {
    this.router.navigateByUrl('searchListings');
  }
  signOut() {
    this.cookie.deleteAll();
    this.router.navigateByUrl('');
    window.location.reload();
  }

  signIn() {
    if (this.showSignInView == false) {
      this.showSignInView = true;
    }
    else {
      this.showSignInView = false;
    }
  }

  searchListings() {
    this.listings = {};
    this.listingService.searchListings().subscribe((
      payload) => {
      console.log(payload);

      for (const key in payload) {
        if (payload.hasOwnProperty(key)) {
     //   if (payload.tags == this.tags[0]) {
       //     this.listings = payload;
        //  }
       // this.tags.values;
          //data.location //data beings just some variable
          this.dataSource = new MatTableDataSource(this.listings);
          this.dataSource.sort = this.sort;
        }
      }
    }, (error) => console.log(error));
  }

  ngOnInit() {
    this.listings = null;
    this.cookie.deleteAll();
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


  deleteTag(tag: string) {
    this.tags.splice(this.tags.indexOf(tag), 1)
  }

  addTag(tag: string) {
    if (this.tags.length < 5) {
      this.tags.push(tag);
    }
    this.currentTag = '';
  }

  atMaxTags(): boolean {
    if (this.tags.length == 5) {
      return true;
    } else {
      return false;
    }
  }
}

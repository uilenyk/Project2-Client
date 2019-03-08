import { MarketPlaceUserDataService } from './../../services/market-place-user-data.service';
import { ListingsService } from 'src/app/services/listings.service';
import { Component, OnInit, ViewChild, NgModule, NgZone } from '@angular/core';
import { MarketPlaceUser } from 'src/app/models/market-place-user';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { MessagesService } from 'src/app/services/messages.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isDeleted = false;
  currentTag = '';
  maxTags = false;
  tags: Array<string> = [];
  showSignIn = true;
  showSignInView = false;
  username: any;
  marketPlaceUser: MarketPlaceUser;
  listings: any;
  id: any;
  newMessage: any;
  message: any;
  closeResult: string;
  private messageForm: FormGroup;
  name: any;


  constructor(private marketPlaceDataService: MarketPlaceUserDataService,
              private cookie: CookieService,
              private router: Router,
              private listingService: ListingsService,
              private messageService: MessagesService,
              private modalService: NgbModal,
              private zone: NgZone) { }


  buyListing(listing: any) {
    this.id = this.cookie.get('mpuid');
    this.listingService.buyListing(this.id, listing).subscribe((response) => { });
    // this.messageService.sendMessage(this.id, this.username, this.newMessage).subscribe((response) => { });
  }

  private createMessageForm(): FormGroup {
    return new FormGroup({
      subject: new FormControl(),
      content: new FormControl(),
      sender: new FormControl()
    });
  }

  messageOwner() {
    this.id = this.cookie.get('mpuid');
    this.messageForm.patchValue({ sender: this.marketPlaceUser });
    const form = this.messageForm;
    this.messageService.sendMessage(this.name, form.value).subscribe((response) => {
      console.log(response);
    }, (error) => console.log(error));
    this.modalService.dismissAll();
  }

  loadMessages() {
    this.listings = null;
    this.router.navigateByUrl('messages');
  }
  loadUserListings() {
    this.listings = null;
    this.router.navigateByUrl('userlistings');
  }
  signOut() {
    this.cookie.deleteAll();
    this.router.navigateByUrl('');
    window.location.reload();
  }

  signIn() {
    if (this.showSignInView === false) {
      this.showSignInView = true;
    } else {
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
          // data.location //data beings just some variable
          // this.dataSource.data = payload;

          // get owner from this payload to use for sending and buying
          this.listings = payload;
        }
      }
    }, (error) => console.log(error));
  }

  ngOnInit() {
    this.listings = null;
    this.cookie.deleteAll();
    this.marketPlaceDataService.currentMarketPlaceUser.subscribe((user) => {
      this.marketPlaceUser = user;
    });

  }

  recieveShowSignInEvent(object) {
    this.showSignIn = object.showSignIn;
    this.showSignInView = false;
    this.username = object.firstname;
  }


  deleteTag(tag: string) {
    this.tags.splice(this.tags.indexOf(tag), 1);
  }

  addTag(tag: string) {
    if (this.tags.length < 2) {
      this.tags.push(tag);
    }
    this.currentTag = '';
  }


  atMaxTags(): boolean {
    if (this.tags.length === 2) {
      return true;
    } else {
      return false;
    }
  }
  open(content, listing) {
    this.modalService.open(content);
    this.messageForm = this.createMessageForm();
    this.name = listing.owner.pseudoname;
  }

}

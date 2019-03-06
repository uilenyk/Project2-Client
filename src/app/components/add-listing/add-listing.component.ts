import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ListingsService } from 'src/app/services/listings.service';
import { FormGroup, FormControl } from '@angular/forms';
import { componentFactoryName, ResourceLoader } from '@angular/compiler';
import { MarketPlaceUser } from 'src/app/models/market-place-user';
import { MarketPlaceUserDataService } from '../../services/market-place-user-data.service';


@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {

  constructor(private listingService: ListingsService,
    
              private cookie: CookieService,
              private router: Router,
              private marketPlaceUserDataService: MarketPlaceUserDataService
  ) { }

  @Output()
  showAddListingEvent = new EventEmitter<object>();

  private listingForm: FormGroup;

  id: any;
  showAddListing;
  owner: any;

  ngOnInit() {
    this.id = this.cookie.get('mpuid');
    this.listingForm = new FormGroup({
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
      tags: new FormControl(),
      image: new FormControl(),
      timeout: new FormControl(),
      owner: new FormControl(),
      active: new FormControl()
    });

  }

  close() {
    this.showAddListing = false;
    this.showAddListingEvent.emit({showAddListing: this.showAddListing});
  }
  onSubmit() {
    var date = new Date();
    var timestamp = date.getTime();
    this.marketPlaceUserDataService.currentMarketPlaceUser.subscribe((user) => {
      this.owner = user;
    });
    this.listingForm.patchValue({ owner: this.owner });
    this.listingForm.patchValue({ timeout: timestamp });
    this.listingForm.patchValue({ active: 'true' });
    const form = this.listingForm;
    console.log(form);
    if (form.valid) {
      this.listingService.addListing(form.value).subscribe();
      this.router.navigateByUrl('');
    } else {
      alert('Invalid form!');
    }
  }
}


import { NgSelectModule, NgOption } from '@ng-select/ng-select';
import { TagService } from '../../services/tag.service';
import { RestAPIService } from './../../services/rest-api.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ListingsService } from 'src/app/services/listings.service';
import { FormGroup, FormControl } from '@angular/forms';
import { MarketPlaceUserDataService } from '../../services/market-place-user-data.service';
import { PhotoService } from 'src/app/services/photo.service';
import { promise } from 'protractor';


@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {

  selectedFiles: FileList;
  constructor(
    private listingService: ListingsService,
    private photoService: PhotoService,
    private cookie: CookieService,
    private router: Router,
    private marketPlaceUserDataService: MarketPlaceUserDataService,
    private tagService: TagService
  ) { }

  @Output()
  showAddListingEvent = new EventEmitter<object>();

  private listingForm: FormGroup;

  id: any;
  showAddListing;
  owner: any;
  listid: any;
  // tags = [
  //   {
  //     tagid: 6600,
  //     tagname: 'electronics'
  //   }
  // ];

  tags: any;
  userTag: any;
  selectedTags: any[];

  async upload() {
    const file = this.selectedFiles.item(0);
    const img = await this.photoService.uploadfile(file);
    console.log("printing photo location: " + this.photoService.currentImage);
    // this.photoService.currentImage.subscribe((data) => {
    //   console.log(data);
    this.listingForm.patchValue({ images: [{ location: img }] });
    //});
  }


  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  ngOnInit() {
    this.marketPlaceUserDataService.currentMarketPlaceUser.subscribe((user) => {
      if (user == null) {
        this.router.navigateByUrl('');
      }
    });
    this.id = this.cookie.get('mpuid');
    this.listingForm = new FormGroup({
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
      enteredTag: new FormControl(),
      images: new FormControl(),
      timeout: new FormControl(),
      owner: new FormControl(),
      active: new FormControl()
    });
    this.tagService.getTags().subscribe(res => {
      console.log(res);
      this.tags = res;

    });
  }

  close() {
    this.showAddListing = false;
    this.showAddListingEvent.emit({ showAddListing: this.showAddListing });
  }
  updateTag(tag) {
    this.userTag = tag;
    console.log(this.userTag);

  }
  onSubmit() {
    const date = new Date();
    const timestamp = date.getTime();
    this.marketPlaceUserDataService.currentMarketPlaceUser.subscribe((user) => {
      this.owner = user;
    });

    this.listingForm.patchValue({ enteredTag: this.userTag });
    this.listingForm.patchValue({ owner: this.owner });
    this.listingForm.patchValue({ timeout: timestamp });
    this.listingForm.patchValue({ active: 'true' });
    //this.upload();
    const form = this.listingForm;
    console.log(form.value);
    if (form.valid) {
      this.upload();
      this.listingService.addListing(form.value).subscribe(
        (payload) => {
          console.log(payload);
          this.listid = payload.listid;
        }, (error) => console.log(error));
      this.router.navigateByUrl('');
    } else {
      alert('Invalid form!');
    }
  }

}

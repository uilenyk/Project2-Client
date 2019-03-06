import { Injectable } from '@angular/core';
import { RestAPIService } from './rest-api.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  constructor(private restAPIService: RestAPIService) { }
  getListings(id: any): Observable<any> {
    //  return this.testMarketPlaceUser;
    return this.restAPIService.getListings(id);
  }
  addListing(formData: any) {
    return this.restAPIService.addListing(formData);
  }
  searchListings(tags: any): Observable<any> {
    return this.restAPIService.addListing(tags); // to be added       this.restAPIService.getListingsByTag(tags);
  }
}

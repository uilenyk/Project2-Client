import { Injectable } from '@angular/core';
import { RestAPIService } from './rest-api.service';
import { Observable } from 'rxjs';
import { AnyLengthString } from 'aws-sdk/clients/comprehend';

@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  constructor(private restAPIService: RestAPIService) { }
  getListings(id: any): Observable<any> {
    //  return this.testMarketPlaceUser;
    return this.restAPIService.getListingsEndPoint(id);
}
  addListing(formData: any): Observable<any> {
    return this.restAPIService.addListing(formData);
  }

  searchListings(): Observable<any> {
    return null; // this.restAPIService.getListings();
  }

  deleteListing(listid: any): Observable<any> {
    return this.restAPIService.deleteListing(listid);
  }

  updateListing(listid: any, listing: any): Observable<any> {
    return this.restAPIService.updateListing(listid, listing);
  }

  patchListing(listid: any, makeInactiveRequest: any): Observable<any> {
    return this.restAPIService.patchListing(listid, makeInactiveRequest);
  }

  buyListing(userId: any, listing: any): Observable<any>  {
    return this.restAPIService.buyListing(userId, listing);
  }

}

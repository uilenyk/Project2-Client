import { Injectable } from '@angular/core';
import { RestAPIService } from './rest-api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarketPlaceUserService {

  constructor(private restAPIService: RestAPIService) { }
  getUser(id: any): Observable<any> {
    //  return this.testMarketPlaceUser;
    return this.restAPIService.getMarketPlaceUser(id);
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestAPIService } from './rest-api.service';
import { MarketPlaceUser } from '../models/market-place-user';

@Injectable({
    providedIn: 'root'
})
export class SearchService {

    constructor(private restAPIService: RestAPIService) { }

    search(userData: any): Observable<any> {
        return this.restAPIService.getListingsEndPoint(userData);
    }
  }

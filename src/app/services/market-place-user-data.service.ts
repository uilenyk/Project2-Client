import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { MarketPlaceUser } from '../models/market-place-user';

@Injectable({
    providedIn: 'root'
})
export class MarketPlaceUserDataService {

    private marketPlaceUserDataSource = new BehaviorSubject<MarketPlaceUser>(null);
    currentMarketPlaceUser = this.marketPlaceUserDataSource.asObservable();

    constructor() { }

    changeMarketPlaceUser(marketPlaceUser: MarketPlaceUser) {
        this.marketPlaceUserDataSource.next(marketPlaceUser);
    }

}

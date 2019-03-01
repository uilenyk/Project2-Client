import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { MarketPlaceUser } from '../models/market-place-user';

@Injectable({
    providedIn: 'root'
})
export class MarketPlaceUserDataService {

    private marketPlaceUserDataSource
        = new BehaviorSubject<MarketPlaceUser>(null);

    constructor() { }

    changeMarketPlaceUser(marketPlaceUser: MarketPlaceUser) {
        this.marketPlaceUserDataSource.next(marketPlaceUser);
    }

}

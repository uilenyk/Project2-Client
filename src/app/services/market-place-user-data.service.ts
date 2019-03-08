import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { MarketPlaceUser } from '../models/market-place-user';

@Injectable({
    providedIn: 'root'
})
export class MarketPlaceUserDataService {

    private marketPlaceUserDataSource = new BehaviorSubject<MarketPlaceUser>(null);
    currentMarketPlaceUser = this.marketPlaceUserDataSource.asObservable();

    currentUser: MarketPlaceUser;

    constructor() { }

    changeMarketPlaceUser(marketPlaceUser: MarketPlaceUser) {
        this.marketPlaceUserDataSource.next(marketPlaceUser);
    }


    setUser(user: MarketPlaceUser) {
        this.currentUser = user;
    }

    getUser() {
        return this.currentUser;
    }
}

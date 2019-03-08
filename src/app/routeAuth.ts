import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MarketPlaceUserDataService } from './services/market-place-user-data.service';


@Injectable({
    providedIn: 'root'
})
export class RouteAuth implements CanActivate {


    constructor(
        private marketPlaceUser: MarketPlaceUserDataService,
        private router: Router
    ) {

    }
    isLogged: any;
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        console.log(this.marketPlaceUser);

        this.marketPlaceUser.currentMarketPlaceUser.subscribe((user) => {
            if (user != null) {

                this.isLogged = true;
            } else {
                this.isLogged = false;
            }
        });

        return this.isLogged;
    }
}

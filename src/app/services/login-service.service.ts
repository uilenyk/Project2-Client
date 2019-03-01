import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestAPIService } from './rest-api.service';
import { MarketPlaceUser } from '../models/market-place-user';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    private testMarketPlaceUser: MarketPlaceUser = {
        firstName: 'John',
        lastName: 'Doe',
        address: {
            street: 'Bruce B. Downs Blvd 2000',
            city: 'Tampa',
            state: 'Florida',
            zipCode: 31405
        },
        credential: {
            email: 'johnDoe@gmail.com',
            username: 'johndoe',
            password: 'johndoe'
        }
    };

    constructor(private restAPIService: RestAPIService) { }

    login(userData: any): Observable<any> {
        //  return this.testMarketPlaceUser;
        return this.restAPIService.loginEndPoint(userData);
    }

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestAPIService } from './rest-api.service';
import { MarketPlaceUser } from '../models/market-place-user';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private restAPIService: RestAPIService) { }

    login(userData: any): Observable<any> {
        return this.restAPIService.login(userData);
    }

    signUp(formData: any) {
        return this.restAPIService.signUp(formData);
    }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestAPIService } from './rest-api.service';
import { MarketPlaceUser } from '../models/market-place-user';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private restAPIService: RestAPIService) { }

    login(loginRequest): Observable<any> {
        return this.restAPIService.login(loginRequest);
    }

    signUp(formData: any) {
        console.log(formData);
        return this.restAPIService.signUp(formData);
    }
}

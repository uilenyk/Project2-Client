import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestAPIService } from './rest-api.service';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private restAPIService: RestAPIService) { }

    login(formData: any): Observable<any> {
        console.log('Post Request To Login EndPoint! ' + formData.email);
        return this.restAPIService.loginEndPoint(formData);
    }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class RestAPIService {

    private apiURL = environment.apiUrl;

    /*
    * Register GET, POST, PUT, and other http request types here
    */
    private LOGIN_END_POINTS = {
        GET: { },
<<<<<<< HEAD
        POST: { loginURL: this.testURL + 'users/login'},
=======
        POST: { loginURL: this.apiURL + 'unknown/login'},
        PUT: { }
    };

    private SIGNUP_END_POINTS = {
        GET: { },
        POST: { signupURL: this.apiURL + '/unknown/signup'},
        PUT: { }
    };

    private LISTING_END_POINTS = {
        GET: {listingURL: this.apiURL + '/listings'},
        POST: {},
>>>>>>> f8b6cf7c723127af3b395aaa6f7445550e93b3dc
        PUT: { }
    };

    constructor(private httpClient: HttpClient) { }

    getListingsEndPoint(id: any) {
        const url = `${environment.apiUrl}/market-place-users/${id}/listings`;
        return this.httpClient.get(url);
      }

    addListing(formData: any) {
        const url = `${environment.apiUrl}/listings`;
        return this.httpClient.post(url, formData);
    }

    signUpEndPoint(formData: any) {
    const url = this.SIGNUP_END_POINTS.POST.signupURL;
    return this.httpClient.post(url, formData);
    }

    loginEndPoint(formData: any) {
        const url = this.LOGIN_END_POINTS.POST.loginURL;
        return this.httpClient.post(url, formData);
    }

}

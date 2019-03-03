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
        POST: { loginURL: this.apiURL + 'unknown/login'},
        PUT: { }
    };

    private SIGNUP_END_POINTS = {
        GET: { },
        POST: { loginURL: this.apiURL + '/unknown/signup'},
        PUT: { }
    };

    constructor(private httpClient: HttpClient) { }

    signUpEndPoint(formData: any) {
    const url = this.SIGNUP_END_POINTS.POST.loginURL;
    return this.httpClient.post(url, formData);
    }

    loginEndPoint(formData: any) {
        const url = this.LOGIN_END_POINTS.POST.loginURL;
        return this.httpClient.post(url, formData);
    }
}

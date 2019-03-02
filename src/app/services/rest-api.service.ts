import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class RestAPIService {

    private testURL = environment.testURL;

    /*
    * Register GET, POST, PUT, and other http request types here
    */
    private END_POINTS = {
        GET: { },
        POST: { loginURL: this.testURL + 'users/login'},
        PUT: { }
    };

    constructor(private httpClient: HttpClient) { }

    loginEndPoint(formData: any) {
        const url = this.END_POINTS.POST.loginURL;
        return this.httpClient.post(url, formData);
    }
}

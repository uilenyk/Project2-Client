import { AnyLengthString } from 'aws-sdk/clients/comprehend';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RestAPIService {

    private apiURL = environment.apiUrl;

    /*
    * Register GET, POST, PUT, and other http request types here
    */
    private LOGIN_END_POINTS = {
        GET: {},
        POST: { loginURL: this.apiURL + '/unknown/login' },
        PUT: {}
    };

    private SIGNUP_END_POINTS = {
        GET: {},
        POST: { signupURL: this.apiURL + '/unknown/signup' },
        PUT: {}
    };

    private LISTING_END_POINTS = {
        GET: { listingURL: this.apiURL + '/listings' },
        POST: {},
        PUT: {}
    };

    constructor(private httpClient: HttpClient) { }

    buyListing(userId: any, listing: any) {
        const url = `${environment.apiUrl}/listings/${userId}`;
        return this.httpClient.put(url, listing);
    }

    deleteListing(listid: any){
        const url = `${environment.apiUrl}/listings/${listid}`;
        return this.httpClient.delete(url);
    }

    updateListing(listid: any, listing: any){
        const url = `${environment.apiUrl}/listings/${listid}`;
        return this.httpClient.patch(url, listing);
    }

    patchListing(listid: any, makeInactiveRequest: any){
        const url = `${environment.apiUrl}/listings/${listid}/active`;
        console.log(url);
        return this.httpClient.patch(url, makeInactiveRequest);
    }

    sendMessage(username: any, message: any) {
        const url = `${environment.apiUrl}/message/send/${username}`;
        return this.httpClient.post(url, message);
    }

    reply(id: any, username: any, message: any) {
        const url = `${environment.apiUrl}/message/reply/${id}/${username}`;
        return this.httpClient.post(url, message);
    }

    sentMessages(id: any) {
        const url = `${environment.apiUrl}/message/sent/${id}`;
        return this.httpClient.get(url);
    }

    recievedMessages(id: any) {
        const url = `${environment.apiUrl}/message/received/${id}`;
        return this.httpClient.get(url);
    }

    messages(id: any, path: any) {
        const url = `${environment.apiUrl}/message/${path}/${id}`;
        return this.httpClient.get(url);
    }


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

    getListings() {
        const url = this.LISTING_END_POINTS.GET.listingURL;
        return this.httpClient.get(url);
    }
    getTags() {
        const url = `${this.apiURL}/tags`;
        return this.httpClient.get(url);
    }

    addTag(tag) {
        const url = `${this.apiURL}/tags`;
        return this.httpClient.post(url, tag);
    }

}

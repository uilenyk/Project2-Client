import { AnyLengthString } from 'aws-sdk/clients/comprehend';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RestAPIService {

    private apiURL = environment.apiURL;

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
        const url = `${environment.apiURL}/listings/${userId}`;
        return this.httpClient.put(url, listing);
    }

    deleteListing(listid: any) {
        const url = `${environment.apiURL}/listings/${listid}`;
        return this.httpClient.delete(url);
    }

    updateListing(listid: any, listing: any) {
        const url = `${environment.apiURL}/listings/${listid}`;
        return this.httpClient.patch(url, listing);
    }

    patchListing(listid: any, makeInactiveRequest: any) {
        const url = `${environment.apiURL}/listings/${listid}/active`;
        console.log(url);
        return this.httpClient.patch(url, makeInactiveRequest);
    }

    sendMessage(username: any, message: any) {
        const url = `${environment.apiURL}/message/send/${username}`;
        return this.httpClient.post(url, message);
    }

    reply(id: any, username: any, message: any) {
        const url = `${environment.apiURL}/message/reply/${id}/${username}`;
        return this.httpClient.post(url, message);
    }



    messages(id: any, path: any) {
        const url = `${environment.apiURL}/message/${path}/${id}`;
        return this.httpClient.get(url);
    }


    getListingsEndPoint(id: any) {
        const url = `${this.apiURL}/market-place-users/${id}/listings`;
        return this.httpClient.get(url, id);
    }

    signUp(signupRequest) {
        const url = `${this.apiURL}/unknown/signup`;
        return this.httpClient.post(url, signupRequest);
    }

    login(loginRequest) {
        const url = `${this.apiURL}/unknown/login`;
        return this.httpClient.post(url, loginRequest);
    }

    getMarketPlaceUser(id) {
        const url = `${this.apiURL}/market-place-users/${id}`;
        return this.httpClient.get(url);
    }

    // getMarketPlaceUserListings(id) {
    //     const url = `${this.URL}/market-place-users/${id}/listings`;
    //     return this.httpClient.get(url);
    // }

    getListing(id) {
        const url = `${this.apiURL}/listings/${id}`;
        return this.httpClient.get(url);
    }

    addListing(listing) {
        const url = `${this.apiURL}/tags`;
        return this.httpClient.post(url, listing);
    }

    getMarketPlaceUserListings(id) {
        const url = `${this.apiURL}/market-place-users/${id}/listings`;
        return this.httpClient.get(url);
    }

    // getTags() {
    //     const url = `${this.URL}/tags`;
    //     return this.httpClient.get(url);
    // }

    // addTag(tag) {
    //     const url = `${this.URL}/tags`;
    //     return this.httpClient.post(url, tag);
    // }

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

    updateMarketPlaceUser(user: any) {
        const url = `${this.apiURL}/market-place-users/personal/update`;
        return this.httpClient.put(url, user);
    }
}

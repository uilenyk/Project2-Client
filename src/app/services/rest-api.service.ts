import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RestAPIService {

    private URL = environment.apiURL;

    constructor(private httpClient: HttpClient) { }

    // sentMessages(id: any) {
    //     const url = `${this.URL}/message/sent/${id}`;
    //     return this.httpClient.get(url);
    // }

    // recievedMessages(id: any) {
    //     const url = `${this.URL}/message/received/${id}`;
    //     return this.httpClient.get(url);
    // }

    messages(id: any, type: string) {
        const url = `${this.URL}/message/${type}/${id}`;
        return this.httpClient.get(url);
    }

    signUp(signupRequest) {
        const url = `${this.URL}/unknown/signup`;
        return this.httpClient.post(url, signupRequest);
    }

    login(loginRequest) {
        const url = `${this.URL}/unknown/login`;
        return this.httpClient.post(url, loginRequest);
    }

    getMarketPlaceUser(id) {
        const url = `${this.URL}/market-place-users/${id}`;
        return this.httpClient.get(url);
    }

    getMarketPlaceUserListings(id) {
        const url = `${this.URL}/market-place-users/${id}/listings`;
        return this.httpClient.get(url);
    }

    getListing(id) {
        const url = `${this.URL}/listings/${id}`;
        return this.httpClient.get(url);
    }

    getListings(active: boolean) {
        const url = `${this.URL}/listings/?active=${active}`;
        return this.httpClient.get(url);
    }

    addListing(listing) {
        const url = `${this.URL}/tags`;
        return this.httpClient.post(url, listing);
    }

    getTag(id) {
        const url = `${this.URL}/tags/${id}`;
        return this.httpClient.get(url);
    }

    getTags() {
        const url = `${this.URL}/tags`;
        return this.httpClient.get(url);
    }

    addTag(tag) {
        const url = `${this.URL}/tags`;
        return this.httpClient.post(url, tag);
    }

    updateMarketPlaceUser(user) {
        const url = `${this.URL}/market-place-user/personal/update`;
        return this.httpClient.put(url, user);
    }
}

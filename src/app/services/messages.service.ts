import { Injectable } from '@angular/core';
import { RestAPIService } from './rest-api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private restAPIService: RestAPIService) { }

  sendMessage(username: any, message: any): Observable<any> {
    //  return this.testMarketPlaceUser;
    return this.restAPIService.sendMessage(username, message);
  }

  reply(id: any, username: any, message: any): Observable<any> {
    return this.restAPIService.reply(id, username, message);
  }

  getMessages(id: any, path: any): Observable<any> {
    return this.restAPIService.messages(id, path);
  }}
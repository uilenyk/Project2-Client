import { Injectable } from '@angular/core';
import { RestAPIService } from './rest-api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private restAPIService: RestAPIService) { }



  //   getSentMessages(id: any): Observable<any> {
  //     //  return this.testMarketPlaceUser;
  //     return this.restAPIService.sentMessages(id);
  //  }
  //  getRecievedMessages(id: any): Observable<any> {
  //   //  return this.testMarketPlaceUser;
  //   return this.restAPIService.recievedMessages(id);
  // }

  getMessages(id: any, type: string): Observable<any> {
    //  return this.testMarketPlaceUser;
    return this.restAPIService.messages(id, type);
  }
}

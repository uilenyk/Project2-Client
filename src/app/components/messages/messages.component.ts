import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';
import { MarketPlaceUserDataService } from 'src/app/services/market-place-user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(private cookie: CookieService,
              private messageService: MessagesService,
              private marketPlaceUser: MarketPlaceUserDataService,
              private router: Router) { }

  messages: any;
  userId: any;
  sender: any;
  reciever: any;
  ngOnInit() {
    this.marketPlaceUser.currentMarketPlaceUser.subscribe((user) => {
      if (user == null) {
        this.router.navigateByUrl('login');
      }
    });
    this.userId = this.cookie.get('mpuid');
  }

  // sentMessages() {
  //   this.messages = [];
  //   this.messageService.getSentMessages(this.userId)
  //     .subscribe((payload) => {
  //       console.log(payload);
  //       for (const key in payload) {
  //         if (payload.hasOwnProperty(key)) {
  //           this.messages = payload;
  //         }
  //       }
  //     },
  //       (error) => console.log(error));
  //   }

  // recievedMessages() {
  //   this.messages = [];
  //   this.messageService.getRecievedMessages(this.userId)
  //     .subscribe((payload) => {
  //       console.log(payload);
  //       for (const key in payload) {
  //         if (payload.hasOwnProperty(key)) {
  //           this.messages = payload;
  //         }
  //       }
  //     },
  //       (error) => console.log(error));
  // }

  fetchMessages(type: string) {
    this.messages = [];
    this.messageService.getMessages(this.userId, type)
      .subscribe((payload) => {
        console.log(payload);
        for (const key in payload) {
          if (payload.hasOwnProperty(key)) {
            this.messages = payload;
          }
        }
      },
        (error) => console.log(error));
  }

}

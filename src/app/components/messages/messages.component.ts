import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';
import { MarketPlaceUserDataService } from 'src/app/services/market-place-user-data.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { ReplaySubject } from 'rxjs';
import { MarketPlaceUser } from 'src/app/models/market-place-user';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(private cookie: CookieService,
              private messageService: MessagesService,
              private marketPlaceUser: MarketPlaceUserDataService,
              private router: Router,
              private modalService: NgbModal) { }

  messages: any;
  messageId: any;
  userId;
  sender: any;
  name: any;
  path = 'received';
  marketUser: MarketPlaceUser;
  private messageForm: FormGroup;


  ngOnInit() {
    this.marketPlaceUser.currentMarketPlaceUser.subscribe((user) => {
      if (user == null) {
        this.router.navigateByUrl('');
      }
      else {
        this.marketUser = user;
      }
    });
    this.userId = this.cookie.get('mpuid');
  }

<<<<<<< HEAD
  open(content, message) {
    this.modalService.open(content);
    this.messageForm = this.createMessageForm();
    console.log(message);
    this.messageId = message.id;
    this.name = message.sender.pseudoname;
   // this.name = message.owner.pseudoname;
    //this.reply(this.userId, this.name, message.value);
  }

  private createMessageForm(): FormGroup {
    return new FormGroup({
      subject: new FormControl(),
      content: new FormControl(),
      sender: new FormControl()
    });
  }

  reply() {
    this.messageForm.patchValue({ sender: this.marketUser });
    const form = this.messageForm;
    this.messageService.reply(this.messageId, this.name, form.value).subscribe((response) => {
      console.log(response);
      }, (error) => console.log(error));
    this.modalService.dismissAll();
  }

  getMessages(path: any) {
    this.path = path;
    this.messages = [];
    this.messageService.getMessages(this.userId, path)
=======
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
>>>>>>> EvaineDemoBranch
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

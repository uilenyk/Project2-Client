import { Component, OnInit } from '@angular/core';
import { MarketPlaceUser } from 'src/app/models/market-place-user';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  constructor(private marketPlaceUser: MarketPlaceUser,
              private cookie: CookieService,
              private router: Router,
              private ActiveRoute ) {}

  ngOnInit() {
    this.marketPlaceUser = (this.cookie.get('mpuid'));
  }

}

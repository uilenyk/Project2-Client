import { Component, OnInit } from '@angular/core';
import { MarketPlaceUser } from 'src/app/models/market-place-user';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { MarketPlaceUserService } from 'src/app/services/market-place-user.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  user: any;

  constructor(private marketPlaceUserService: MarketPlaceUserService,
              private cookie: CookieService,
              private router: Router,
              ) {}

  ngOnInit() {
    this.user = this.marketPlaceUserService.getUser(this.cookie.get('mpuid')).subscribe((Response) => {
    console.log(Response);
     });
  }

}

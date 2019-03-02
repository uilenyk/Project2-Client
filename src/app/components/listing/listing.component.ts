import { Component, OnInit } from '@angular/core';
import { MarketPlaceUser } from 'src/app/models/market-place-user';
import { MarketPlaceUserDataService } from 'src/app/services/market-place-user-data.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent  {

 
  constructor(private marketPlaceDataService: MarketPlaceUserDataService ) {

   }


}

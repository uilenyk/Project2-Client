import { MessagesService } from './../../services/messages.service';
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { RestAPIService } from '../../services/rest-api.service';
import { Observable } from 'rxjs';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {
  MatPaginator,
  MatTableDataSource,
  MatSort
} from '@angular/material';
import { MarketPlaceUserDataService } from 'src/app/services/market-place-user-data.service';
import { ListingsService } from 'src/app/services/listings.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


export interface ListingElement {
  icon: any;
  name: string;
  description: string;
  price: number;
  tags: any;
  owner: any;
  action: any;
}
@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  owner: any;
  tags: any;
  closeResult: string;
  displayedColumns: string[] = ['icon', 'owner', 'name', 'description', 'price', 'action'];
  marketPlaceUser: any;
  id: any;
  private messageForm: FormGroup;
  name: any;
  buyersReceipt: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<ListingElement>;
  constructor(
    private router: Router,
    private restAPIService: RestAPIService,
    private modalService: NgbModal,
    private marketPlaceDataService: MarketPlaceUserDataService,
    private cookie: CookieService,
    private listingService: ListingsService,
    private messageService: MessagesService) { }
  ngOnInit() {
    this.fetchListings().subscribe((response) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.dataSource);
    });
    this.marketPlaceDataService.currentMarketPlaceUser.subscribe((user) => {
      this.marketPlaceUser = user;
    });
  }
  loadListings() {
    this.fetchListings().subscribe((response) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.dataSource);
    });
  }
  buyListing(content, listing: any) {
    this.id = this.cookie.get('mpuid');
    console.log(this.id);
    console.log(listing);
    this.listingService.buyListing(this.id, listing).subscribe((response) => {
      this.buyersReceipt = response;
      console.log(this.buyersReceipt);
    });

    this.getModalService(content);

    // this.dataSource = new MatTableDataSource();
    // this.loadListings();

  }
  fetchListings(): Observable<any> {
    return this.restAPIService.getListings();
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  private createMessageForm(): FormGroup {
    return new FormGroup({
      subject: new FormControl(),
      content: new FormControl(),
      sender: new FormControl()
    });
  }
  open(content, listing) {
    this.modalService.open(content);
    this.messageForm = this.createMessageForm();
    this.name = listing.owner.pseudoname;
  }
  messageOwner() {
    this.id = this.cookie.get('mpuid');
    this.messageForm.patchValue({ sender: this.marketPlaceUser });
    const form = this.messageForm;
    this.messageService.sendMessage(this.name, form.value).subscribe((response) => {
      console.log(response);
    }, (error) => console.log(error));
    this.modalService.dismissAll();
  }
  viewOwner(content: any, element: any) {
    this.owner = element.owner;
    console.log(this.owner);
    this.getModalService(content);
  }
  viewTags(content: any, element: any) {
    this.tags = element.tags;
    console.log(this.tags);
    this.getModalService(content);
  }

  private getModalService(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        console.log(result);
        this.closeResult = `Closed with: ${result}`;
        this.router.navigateByUrl('marketPage');
      }, (reason) => {
        console.log(reason);
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        this.router.navigateByUrl('marketPage');

      });
      this.router.navigateByUrl('marketPage');

  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
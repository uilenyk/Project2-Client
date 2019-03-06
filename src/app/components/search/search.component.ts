import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { ListingsService } from 'src/app/services/listings.service';
import { RestAPIService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  dataSource;
  displayedColumns = [];
  @ViewChild(MatSort) sort: MatSort;

  /**
   * Pre-defined columns list for user table
   */
  columnNames = [{
    id: 'listid',
    value: 'ID'

  }, {
    id: 'name',
    value: 'Name'
  },
  {
    id: 'price',
    value: 'Price'
  },
  {
    id: 'description',
    value: 'Desc.'
  },
  {
    id: 'status',
    value: 'Status'
  },
  {
    id: 'tags',
    value: 'Tags'
  }];

  constructor(
    private listingsService: ListingsService
  ) { }

  ngOnInit() {
    this.displayedColumns = this.columnNames.map(x => x.id);
    this.createTable();
  }

  createTable() {
    this.listingsService.searchListings(null).subscribe((response) => {
      console.log(response);
    });
    this.dataSource =
      this.dataSource.sort = this.sort;
  }
}

export interface Listing {
  listid: number;
  name: string;
  price: number;
  description: string;
  status: boolean;
  tags: string;
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/table';

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

  constructor() { }

  ngOnInit() {
    this.displayedColumns = this.columnNames.map(x => x.id);
    this.createTable();
  }

  createTable() {
    const tableArr: Listing[] = [{ listid: 1, name: 'Golf Club Set', price: 59.95, description: 'H', status: true, tags: 'Sports' },
    { listid: 2, name: 'Blender', price: 21.50, description: 'Used Once', status: true, tags: 'Cooking' },
    { listid: 3, name: 'Antique Pistol', price: 6.941, description: 'Certificated of Authenticity included', status: true, tags: 'Other' },
    { listid: 4, name: 'Headset', price: 80.00, description: 'Be', status: false, tags: 'Electronics' },
    { listid: 5, name: 'MTG Red/White tournament deck', price: 5000.53, description: 'Boros Tourney winner', status: true, tags: 'Games' },
    { listid: 6, name: 'Fencing Foil', price: 35.40, description: 'Left-handed', status: false, tags: 'Sports' }
    ];
    this.dataSource = new MatTableDataSource(tableArr);
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

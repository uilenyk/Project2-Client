import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';
import { MatSortModule } from '@angular/material';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule
    ],
    exports: [
        MatTableModule,
        MatPaginatorModule,
        MatSortModule
    ]
})
export class ListingModule { }
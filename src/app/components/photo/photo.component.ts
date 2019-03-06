import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  selectedFiles: FileList;

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
  }

  upload() {
    const file = this.selectedFiles.item(0);
    this.photoService.uploadfile(file);
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
}


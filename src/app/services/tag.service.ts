import { Observable } from 'rxjs';
import { RestAPIService } from './rest-api.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private  restAPIService: RestAPIService) { }

  getTags(): Observable<any> {
    return this.restAPIService.getTags();
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(formData: any) {
    console.log('Post Request To Login!' + formData);
  }

}

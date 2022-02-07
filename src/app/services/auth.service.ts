import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  $modal = new EventEmitter<boolean>(); 
  userLogin:boolean = true; 
  
  constructor() { }

  

}

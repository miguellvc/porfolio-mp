import { EventEmitter, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  $modal = new EventEmitter<boolean>(); 
  userLogin:boolean = true; 
  urlApiPorfolio:string  = environment.urlApiPorfolio; 
  constructor(private http: HttpClient) { }

  

  getUsers() {
    return this.http.get(`${this.urlApiPorfolio}/users`); 
  }

}

import { EventEmitter, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from "@angular/common/http";
import { tap, map, catchError } from 'rxjs/operators';
import { User } from '../interfaces/user.interface'; 
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  $modal = new EventEmitter<boolean>(); 
  $isLogin = new EventEmitter<boolean>(); 
  urlApiPorfolio:string  = environment.urlApiPorfolio; 
  constructor(private http: HttpClient) {}

  
  login(user: User) {
    
     return this.http.post(`${this.urlApiPorfolio}/login`, user)
             .pipe(tap((resp:any) =>{
                 this.initSession(resp);
             } ));
     
     
     
    // if(user.mail == "miguellrvc@gmail.com" && user.password == "123") {
    //      console.log("son iguales"); 
    //      this.$isLogin.emit(true);
    //      this.$modal.emit(false); 
    //      localStorage.setItem('x_token', '123');
    //      return; 
    //    }
    //  console.log("no son iguales");

  }

  logout() { 
    localStorage.removeItem('x_token'); 
    location.reload();
  }

  getUsers():Observable<any> {
    return this.http.get(`${this.urlApiPorfolio}/users`); 
  }

  initSession(x_token: string){
    if(x_token != null) {
      this.$isLogin.emit(true);
      this.$modal.emit(false); 
      localStorage.setItem('x_token', x_token);
   }
  }

  validateSession() {   
    //let resp:boolean = false; 
    const token = localStorage.getItem('x_token');
   return this.http.get(`${this.urlApiPorfolio}/token`,{
      headers: {
         'x-token' : token
      }
    }).pipe(tap((respApi:boolean) => {
      this.$isLogin.emit(respApi) 
      console.log("se ejecuta validateSession", respApi);  
    }));
  }
  
  getToken(){
    const token = localStorage.getItem('x_token')
  
    return this.http.get(`${this.urlApiPorfolio}/token`,{
      headers: {
         'x-token' : token
      }
    }).pipe(map((respApi:boolean) => {
       return respApi ? token : null; 
    }))

  }
}

import { EventEmitter, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from "@angular/common/http";
import { tap, map, catchError } from 'rxjs/operators';
import { User } from '../interfaces/user.interface'; 


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

  getUsers() {
    return this.http.get(`${this.urlApiPorfolio}/users`); 
  }

  initSession(x_token: string){
    if(x_token != null) {
      this.$isLogin.emit(true);
      this.$modal.emit(false); 
      localStorage.setItem('x_token', x_token);
   }
  }

  validateSession(){
    const x_token = localStorage.getItem('x_token');
    console.log("se ejecuta el método validar sesión", x_token);
    return x_token != null; 
  }


}

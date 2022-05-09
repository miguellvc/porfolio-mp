import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  openModalLogin : boolean = false; 
  public login = {
    msg : "login", 
    color : "color-danger", 
    isLogin : false
  }
  
  constructor(private _auth: AuthService) {
  }

  openModal(isLogin : boolean) {

    if(isLogin){
      this._auth.logout(); 
      return; 
    }
    this.openModalLogin = true; 
  }

  ngOnInit(): void {
    
    this.isSession(this._auth.isSession); 
    this._auth.$modal.subscribe(resp => this.openModalLogin = resp);
    this._auth.$isLogin.subscribe(resp => this.isSession(resp));
  }
  isSession(value:boolean){
      if(value){
        this.login.msg = "Salir"; 
        this.login.color = "color-success";
        this.login.isLogin = true; 
    }else{
        this.login.msg = "Login"; 
        this.login.color = "color-danger";
        this.login.isLogin = false; 
    }
  }

}

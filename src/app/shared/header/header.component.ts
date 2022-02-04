import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  openModalLogin:boolean = false; 
  
  constructor(private _auth: AuthService) {}

  openLogin(){
    this.openModalLogin = true; 
  }

  ngOnInit(): void {
    this._auth.$modal.subscribe(resp => this.openModalLogin = resp); 
  }

  

}

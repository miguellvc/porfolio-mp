import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  openModal:boolean = false; 
  
  constructor(private _auth: AuthService) {}

  openModalLogin(){
    this.openModal = true; 
  }

  ngOnInit(): void {
  
    this._auth.$modal.subscribe(resp => this.openModal = resp); 
  }

  

}

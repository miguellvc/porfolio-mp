import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  public openModalBanner:boolean = true; 

  public userLogin:boolean; 
  
  constructor(private _auth: AuthService) { 
    this.userLogin = this._auth.userLogin; 
  }

  ngOnInit(): void {
  }

  closeModalBanner(){
     this.openModalBanner = false;
  }

}

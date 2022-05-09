import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-editing-icons',
  templateUrl: './editing-icons.component.html',
  styleUrls: ['./editing-icons.component.css']
})

export class EditingIconsComponent implements OnInit{

  iconVisible:boolean = false; 
  
  constructor(private _auth: AuthService) {}

  ngOnInit(): void {
    
    this._auth.$isLogin.subscribe(isLogin => {
      this.iconVisible = isLogin 
    });
    this.iconVisible = this._auth.isSession; 
  }
  

}

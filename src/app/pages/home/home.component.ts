import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Banner } from 'src/app/interfaces/banner';
import { AuthService } from 'src/app/services/auth.service';
import { BannerService } from 'src/app/services/banner.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public cargandoData = true; 
  banner:Banner[];
  arrayOfData: any[] = [];
  constructor(private _auth: AuthService, 
              private _banner: BannerService) { 
                this.arrayOfData.push(this._banner.getBanner(), this._auth.validateSession());   
              }

  ngOnInit(): void {

    // this.getUsers();
    
    forkJoin(this.arrayOfData)
       .subscribe( (data:Banner[]) => {
         this.banner = data; 
         this.cargandoData = false;
       }); 
       
  }
  
}

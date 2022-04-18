import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { BannerService } from 'src/app/services/banner.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public cargandoData = true; 
  arrayConten:any[];
  arrayOfData: any[] = [];
  constructor(private _auth: AuthService, 
              private _banner: BannerService) { 
                this.arrayOfData.push(this._banner.getBanner().getBannerApi, this._auth.getUsers());   
              }

  ngOnInit(): void {

    // this.getUsers();
    
    forkJoin(this.arrayOfData)
       .subscribe(data => {
         this.arrayConten = data; 
         console.log("array del content", this.arrayConten); 
         this.cargandoData = false;
       }); 
    //this.getUsers(); 
       
  }
  

  getUsers() {
    this._auth.getUsers()
      .subscribe(data =>{
        console.log(data, "datos desde el componente home user", data); 
        this.cargandoData = false; 
      })
  }
}

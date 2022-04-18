import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { BannerService } from 'src/app/services/banner.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public cargandoData = false; 
  constructor(private _auth: AuthService, 
              private _banner: BannerService) { }

  ngOnInit(): void {

    // this.getUsers();
    
    // this._banner.getBanner().getBannerApi 
    //   .subscribe(data => {
    //     console.log("data del banner desde la api", data);
    //     this.cargandoData = false; 
    //   })
  }
  

  getUsers() {
    this._auth.getUsers()
      .subscribe(data =>{
        console.log(data, "datos desde el componente home"); 
        this.cargandoData = false; 
      })
  }
}

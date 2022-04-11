import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class BannerService {


  private banner = {
    name: "Miguel Rolando Perez", 
    training: "Fullstack Developer", 
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit itaque rem delectus enim voluptatibus deserunt",
    urlImgBanner: "assets/img/personal_img.png"
  }
  urlApiPorfolio:string = environment.urlApiPorfolio; 
  public cargandoData = true; 
  constructor(private http : HttpClient) { }

  getBanner() {
    return  {
             getBanner :  this.banner,
             getBannerApi: this.http.get(`${this.urlApiPorfolio}/banner`)
            }  ; 
  }

  updateBanner(banner) {
      this.banner = {
        ...banner
      } 

      console.log(this.banner);
  }
  
}

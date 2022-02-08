import { Injectable } from '@angular/core';

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
  
  constructor() { }

  getBanner() {
    return this.banner; 
  }

  updateBanner(banner) {
      this.banner = {
        ...banner
      } 

      console.log(this.banner);
  }
  
}

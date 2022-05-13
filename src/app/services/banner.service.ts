import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { Banner } from '../interfaces/banner';


@Injectable({
  providedIn: 'root'
})
export class BannerService {


  private urlApiPorfolio:string = environment.urlApiPorfolio; 
  constructor(private http : HttpClient) { }

  
  getBanner() {
    return  this.http.get(`${this.urlApiPorfolio}/banner`)
              .pipe(map((data:Banner[]) => data ))
  }

  updateBanner(banner:Banner, token) {
    return this.http.put(`${this.urlApiPorfolio}/banner`, banner, {
      headers: {
         'x-token' : token
      }
    })
  }
  
}

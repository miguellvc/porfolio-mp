import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { Education } from '../interfaces/education.interface';


@Injectable({
  providedIn: 'root'
})
export class EducationService {

 urlApiPorfolio:string = environment.urlApiPorfolio; 
  
 private date = new Date(); 
 private educationData: Education[] = [
   {
    id: 3726356235492834093, 
    certificate: 'Añadir una nueva card', 
    description: 'Para añadir una nueva card debe hacer click en el botón',
    year: this.date.getFullYear().toString(),
    color: '#ff4f4f'
   }
 ];

  constructor(private http : HttpClient) { }

  getEducationData():Observable<Education[]> {
     return this.http.get(`${this.urlApiPorfolio}/education`)
             .pipe(map( (resp:Education[]) => resp.length !== 0 ? resp : this.educationData))
  }
  
  getEducation(id:Number, token):Observable<Education> {
    return this.http.get(`${this.urlApiPorfolio}/education/${id}`, {
      headers: {
         'x-token' : token
      }
    }).pipe(map((resp:Education) => resp != null ? resp : this.educationData[0] ))
  }

  newEducation(education:Education, token):Observable<Education> {
    return this.http.post(`${this.urlApiPorfolio}/education`, education, {
      headers: {
         'x-token' : token
      }
    }).pipe(map(resp =>resp as Education))
  }


  upDateEducationData(id, key, value) {
    const updateData = this.educationData.map(data => {
      data.id === id ? {...data, key: value} : data
    });

    return updateData; 
  }

  deleteEducationData(id:Number, token) {
    
    return this.http.delete(`${this.urlApiPorfolio}/education/${id}`, {
      headers: {
         'x-token' : token
      }
    })
  }
}

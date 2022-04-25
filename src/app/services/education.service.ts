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

 private educationData: any[] = [
   {
    id: '123', 
    certificate: 'Argentina Programa primera etapa', 
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto sequi recusandae laborum ipsam dignissimos nostrum vitae provident officia.',
    year: 2021,
    color: '#ff4f4f'
   },
   {
    id: '124', 
    certificate: 'MERN Stack', 
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto sequi recusandae laborum ipsam dignissimos nostrum vitae provident officia.',
    year: 2021,
    color: '#ffb84f'
   },
   {
    id: '126', 
    certificate: 'Intruducción a la programación', 
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto sequi recusandae laborum ipsam dignissimos nostrum vitae provident officia.',
    year: 2019,
    color: '#0000ff'
   },
   {
    id: '127', 
    certificate: 'Técnico Universitario en Informática', 
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto sequi recusandae laborum ipsam dignissimos nostrum vitae provident officia.',
    year: 2011,
    color: '#3dca5c'
   }
 ];

  constructor(private http : HttpClient) { }

  getEducationData():Observable<Education[]> {
     return this.http.get(`${this.urlApiPorfolio}/education`)
             .pipe(map(resp => resp as Education[]))
  }
  
  getEducation(id:Number, token):Observable<Education> {
    return this.http.get(`${this.urlApiPorfolio}/education/${id}`, {
      headers: {
         'x-token' : token
      }
    }).pipe(map(resp =>resp as Education))
  }

  newEducation(education:Education) {
    return this.http.post(`${this.urlApiPorfolio}/education`, education)
  }


  upDateEducationData(id, key, value) {
    const updateData = this.educationData.map(data => {
      data.id === id ? {...data, key: value} : data
    });

    return updateData; 
  }

  deleteEducationData(id) {

    const deleteData = this.educationData.filter(data => {
         if(data.id != id) return data;  
    })
    return deleteData; 
    
    // this.educationData.splice(idex, 1); 
  }
}

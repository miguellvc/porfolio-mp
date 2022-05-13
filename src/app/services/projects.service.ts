import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment.prod';

import { Project } from '../interfaces/projects.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private urlApiPorfolio:string = environment.urlApiPorfolio; 
  
  private projects : Project[] = [
    {
      id : 2983273283226, 
      title : 'Para añadir una nueva card click en el icon', 
      url_Img : '../../../assets/img/undraw_Proud_coder_re_exuy.png', 
      url_Git : 'https://www.google.com/' 
    }
  ]; 

  constructor(private http : HttpClient) { }

  getProject(id:Number, token):Observable<Project>{
    return this.http.get(`${this.urlApiPorfolio}/project/${id}`, {
      headers: {
         'x-token' : token
      }
    }).pipe(map( (resp:Project) => resp !== null ? resp : this.projects[0]))
  }

  getProjects() {
    return this.http.get(`${this.urlApiPorfolio}/project`)
    .pipe(map( (resp:Project[]) => resp.length !== 0 ? resp : this.projects))
  }
  
  newProject(project:Project, token):Observable<Project> {
    return this.http.post(`${this.urlApiPorfolio}/project`, project, {
      headers: {
         'x-token' : token
      }
    }).pipe(map((resp:Project) => resp))
  }
  
  updateProject(project:Project, token):Observable<string[]> {
    return this.http.put(`${this.urlApiPorfolio}/project`, project, {
      headers: {
        'x-token' : token
      }
    }).pipe(map((resp:string[])=> resp))
  }
  
  deleteProject(id:Number, token) {    
    return this.http.delete(`${this.urlApiPorfolio}/project/${id}`, {
      headers: {
         'x-token' : token
      }
    })
  }
  
}

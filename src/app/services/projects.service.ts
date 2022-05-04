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
      id : 100, 
      title : 'Sistema de Gestión Escolar', 
      urlImg : '../../../assets/img/undraw_Proud_coder_re_exuy.png', 
      urlGit : 'https://www.google.com/' 
    }
  ]; 

  constructor(private http : HttpClient) { }

  getProject(id:Number, token):Observable<Project>{
    return this.http.get(`${this.urlApiPorfolio}/project/${id}`, {
      headers: {
         'x-token' : token
      }
    }).pipe(map( (resp:Project) => resp ))
  }

  getProjects() {
    return this.http.get(`${this.urlApiPorfolio}/project`)
    .pipe(map( (resp:Project[]) => resp.length !== 0 ? resp : this.projects))
  }
  
}

import { Injectable } from '@angular/core';
import { Project } from '../interfaces/projects.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projects : Project[] = [
    {
      id : 100, 
      title : 'Sistema de Gestión Escolar', 
      urlImg : '../../../assets/img/undraw_Proud_coder_re_exuy.png', 
      urlGit : 'https://www.google.com/' 
    }
  ]; 

  constructor() { }

  getProjects() {
    return this.projects; 
  }
}

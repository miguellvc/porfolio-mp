import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

import { Skill } from '../interfaces/skill.interface';


@Injectable({
  providedIn: 'root'
})
export class SkillService {
  
  private urlApiPorfolio:string = environment.urlApiPorfolio; 

  private skills : Skill[] = [
    {
      id : 372343873403247,
      language: 'Click en el btn', 
      porcentage: 50, 
      background: '#ff00d820',
      border: '#d81b60',
      color: '#d81b60', 
      rotate : '-45'
    }
  ]

  constructor(private http : HttpClient) { }

  getSkill(id:Number, token):Observable<Skill>{
    return this.http.get(`${this.urlApiPorfolio}/skill/${id}`, {
      headers: {
         'x-token' : token
      }
    }).pipe(map( (resp:Skill) => resp ))
  }
  //!= null ? resp : this.skills[0]
  getSkills():Observable<Skill[]> {  
    return this.http.get(`${this.urlApiPorfolio}/skill`)
     .pipe(map( (resp:Skill[]) => resp.length !== 0 ? resp : this.skills))
  }

  newSkill(skill:Skill, token):Observable<Skill> {
    return this.http.post(`${this.urlApiPorfolio}/skill`, skill, {
      headers: {
         'x-token' : token
      }
    }).pipe(map((resp:Skill) => resp))
  }

  deleteSkill(id:Number, token) {    
    return this.http.delete(`${this.urlApiPorfolio}/skill/${id}`, {
      headers: {
         'x-token' : token
      }
    })
  }
}

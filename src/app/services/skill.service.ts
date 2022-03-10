import { Injectable } from '@angular/core';
import { Skill } from '../interfaces/skill.interface';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private skills : Skill[] = [
    {
      language: 'HTLM', 
      porcentage: 50, 
      colorBackground: '#ff00d820',
      colorBorder: '#d81b60',
      color: '#d81b60', 
      rotate : '-45'
    }
  ]

  constructor() { }

  getSkill() {
    return this.skills; 
  }
}

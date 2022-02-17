import { Component, OnInit } from '@angular/core';

import { animate } from 'src/app/util/animate';
@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  
  public rotate =  `rotate(-${90}deg)`;
  public valor = 12; 

  constructor() { }

  ngOnInit(): void {
    animate('skill', 3000, 'top', '-100px'); 

  }
}

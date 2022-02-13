import { Component, OnInit, ViewChild } from '@angular/core';


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
  }

  
  

}

import { Component, OnInit } from '@angular/core';
import { animate } from 'src/app/util/animate';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  
  colorCard = "blue";
  
  constructor() { }
  
  ngOnInit(): void {

    animate('education', 3000, 'top', '-100px'); 
  
  }

}

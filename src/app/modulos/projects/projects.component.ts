import { Component, OnInit } from '@angular/core';
import { animate } from 'src/app/util/animate';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }



  ngOnInit(): void {

    animate('headline', 3000, 'top', '-180px');

  }

  
}

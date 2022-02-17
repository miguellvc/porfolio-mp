import { Component, OnInit } from '@angular/core';
import { animate } from 'src/app/util/animate';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public openModalAbout:boolean = false; 
  constructor() { }

  ngOnInit(): void {

    animate('about', 3000, 'top', '-100px');  
  }

}

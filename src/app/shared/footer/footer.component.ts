import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  private date = new Date(); 
  public year:Number; 
  constructor() { }

  ngOnInit(): void {
    this.year = this.date.getFullYear(); 
    console.log(this.year); 
  }

}

import { Component, Input, Output, EventEmitter, } from '@angular/core';

@Component({
  selector: 'app-editing-icons',
  templateUrl: './editing-icons.component.html',
  styleUrls: ['./editing-icons.component.css']
})
export class EditingIconsComponent {

  @Input() valueInput: boolean;
  @Output() valueOutput: EventEmitter<boolean> = new EventEmitter();
  
  private output:boolean = true;
  constructor() { }

  click(){
    this.output = !this.valueInput; 
    this.valueOutput.emit(this.output);
    console.log("se ejecuta el evento click", this.output);
  }
}

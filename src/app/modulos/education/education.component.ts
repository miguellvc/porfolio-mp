import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Education } from 'src/app/interfaces/education.interface';

import { EducationService } from 'src/app/services/education.service';


import { animate } from 'src/app/util/animate';
import { setValueForm } from 'src/app/util/util';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  
  modalVisible:boolean = false; 
  educationData : Education[] = []; 
  dataModel : Education; 
  colorCardModel : String;  

  centinela = true; 
  constructor(private _education: EducationService,
              private fb : FormBuilder) { }
  
  public educationForm = this.fb.group({
    certificate: [ '', [ Validators.required ] ],
    color: [ '' ],
    description: [ '', [ Validators.required ] ], 
    year: [ , [ Validators.required ] ]
  }) 
  
  ngOnInit(): void {

    animate('education', 3000, 'top', '-100px'); 
    this.getEducationData(this._education.getEducationData()); 
    //TO DO
    this.educationForm.get("certificate").valueChanges
    .subscribe(data => {
      this.dataModel.certificate = data; 
    });

    this.educationForm.get("description").valueChanges
    .subscribe(data => {
      this.dataModel.description = data; 
    });

    this.educationForm.get("color").valueChanges
    .subscribe(data => {
      this.dataModel.color = data; 
    });

    this.educationForm.get("year").valueChanges
    .subscribe(data => {
      this.dataModel.year = data; 
    });
    
  }

  submit() {
    this.updateEducation(); 
  }

  openModal(id:Number) {
    this.modalVisible = true; 
    
    let data = this.educationData.filter(data => {
      if(data.id == id) return data ; 
    }); 
    
    this.dataModel = {...data[0]}; 

    //TODO
    this.educationForm.controls['certificate'].setValue(this.dataModel.certificate);
    this.educationForm.controls['description'].setValue(this.dataModel.description);
    this.educationForm.controls['color'].setValue(this.dataModel.color);
    this.educationForm.controls['year'].setValue(this.dataModel.year);

    console.log(this.educationForm); 
  }

  closeModal() { 
    this.modalVisible = false;
  }

  getEducationData (data:Education[]) {
    this.educationData = data; 
  }
  updateEducation() {
     const dataUpdate =  this.educationData.map(data => data.id == this.dataModel.id? {...this.dataModel}  : data ); 
     this.educationData = dataUpdate;

     this.getEducationData(dataUpdate); 
  }

  ver() {
      this.centinela = !this.centinela;
  }
}

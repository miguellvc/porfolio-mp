import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


import { Education } from 'src/app/interfaces/education.interface';

import { EducationService } from 'src/app/services/education.service';


import { animate } from 'src/app/util/animate';
import { setValueForm, enableForm } from 'src/app/util/util';
import { swalDelete, isConfirmed } from 'src/app/util/swal';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  
  modalVisible : boolean = false; 
  educationData : Education[];
  education : Education; 
  dataModel : Education = {certificate: '', description: '', year: '', color: ''}; 
  colorCardModel : String;  
  
  // TODO
  dataModel2 : Education; 
  centinela = true; 
  
  constructor(private _education: EducationService,
              private _auth : AuthService,
              private fb : FormBuilder) { }
  
  public educationForm = this.fb.group({
    certificate: [ '', [ Validators.required ] ],
    description: [ '', [ Validators.required ] ], 
    year: [ '', [ Validators.required ] ],
    color: [ '' ]
  }) 
  
  ngOnInit(): void {

   
    animate('education', 3000, 'top', '-100px'); 
    this.getEducationData();
    
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
    //this.updateEducation();
  }

  openModal(id:Number) {
    this.modalVisible = true; 
    
    this.getEducation(id); 
  }

  closeModal() { 
    this.modalVisible = false;
    this.setEducationForm();
  }
  
  // TODO
  newEducation(value:boolean) {
    this.centinela = !value;
    this.setEducationForm(null,value);
  }

  editEducation(value:boolean) {
      this.centinela = !value;
      enableForm(this.educationForm, value);
  }

  cancelAction(value:boolean) {
      this.centinela = !value; 
      this.setEducationForm(this.education, value); 
  }
  
  setEducationForm(education:Education = null, valueForm = false){
    let dataForm:Education = {certificate: '', description: '', year: '', color: ''};
    if(education != null){ dataForm = education}
    setValueForm(this.educationForm, dataForm); 
    enableForm(this.educationForm, valueForm);
  }

  // Method rest

  getEducation(id:Number){
    this._education.getEducation(id, this._auth.getToken())
      .subscribe(education =>{
        this.setEducationForm(education);
        this.education = {...education};
        console.log("petición al server", education);
      })
  }


  getEducationData() {
    this._education.getEducationData()
      .subscribe((education:Education[]) =>{
        this.educationData = education;
      }) 
  }

 // TODO
 postEducation() {
  
 }
 // TODO
 deleteEducation(content, id) {
  swalDelete({content})
    .then((result) => {
      if (result.isConfirmed) {
        console.log("llamar el método del servicio para eliminar el elemento", id);    
        isConfirmed();
      } 
    })
 }


}

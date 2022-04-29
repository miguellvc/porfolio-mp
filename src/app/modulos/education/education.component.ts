import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


import { Education } from 'src/app/interfaces/education.interface';

import { EducationService } from 'src/app/services/education.service';
import { AuthService } from 'src/app/services/auth.service';


import { animate } from 'src/app/util/animate';
import { setValueForm, getValueForm, enableForm } from 'src/app/util/util';
import { swalDelete, swalIsConfirmed, swalError } from 'src/app/util/swal';

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
  modifyEducation = true; 
  // TODO
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
    getValueForm(this.dataModel, this.educationForm); 
    
  }
  submit() {
    if(this.modifyEducation){   
      return 
    }
    this.postEducation(); 
  }

  openModal(id:Number) {
    this.modalVisible = true; 
    this.getEducation(id); 
  }

  closeModal() { 
    this.modalVisible = false;
    this.centinela = true; 
    this.setEducationForm();
  }
  
  newEducation(value:boolean) {
    this.centinela = !value;
    this.modifyEducation = false; 
    this.setEducationForm(null,value);
  }

  editEducation(value:boolean) {
      this.centinela = !value;
      this.modifyEducation = true; 
      this.setEducationForm(this.education, value); 
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
        this.dataModel.id = education.id; 
        this.education = {...education};
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
  this._education.newEducation(this.educationForm.value, this._auth.getToken())
  .subscribe((education:Education)=>{
    if(education!= null){this.getEducationData()}
  });
 }
 // TODO
 deleteEducation(content:String, idEducation:Number) {
  
  if(idEducation === 3726356235492834093) {
    swalError('Error, esta card no puede eliminarse'); 
    return; 
  }

  swalDelete({content})
    .then((result) => {
      if (result.isConfirmed) {    
        this._education.deleteEducationData(idEducation, this._auth.getToken())
        .subscribe((resp)=>{
          console.log(resp)
          if(resp[0] == "ok"){
            // let updateData = this.educationData.filter(data => data.id !== idEducation);
            // this.educationData = updateData;
            this.educationData = []; 
            this.getEducationData();  
            swalIsConfirmed();
          }
        })
      } 
    })
 }

}

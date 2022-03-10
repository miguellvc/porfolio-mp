import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


import { Skill } from 'src/app/interfaces/skill.interface';
import { SkillService } from 'src/app/services/skill.service';

import { animate } from 'src/app/util/animate';
import { enableForm, setValueForm } from 'src/app/util/util';
@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  
  modalVisible:boolean = false; 
  public skills : Skill [] = []; 
  public dataModel : Skill = { language: '', 
                               porcentage: 0, 
                               colorBackground: '', 
                               colorBorder: '', 
                               color: '', 
                               rotate: '' }; 
  constructor(private _skill : SkillService,
              private fb : FormBuilder) { }

  public skillForm = this.fb.group({
    language: ['', [ Validators.required]],
    porcentage: ['', [ Validators.required ]],
    colorBackground: ['', [ Validators.required ]],
    color: ['', [ Validators.required ]],
  })

  ngOnInit(): void {
    animate('skill', 3000, 'top', '-100px'); 
    this.getSkills(this._skill.getSkill());
    
    console.log('función mapear datos',  Number(this.mapearData(50))   );

   //TO DO
   this.skillForm.get("language").valueChanges
   .subscribe(data => {
     this.dataModel.language = data; 
   });

   this.skillForm.get("porcentage").valueChanges
   .subscribe(data => {
     this.dataModel.rotate = this.mapearData(data);
     
     this.dataModel.porcentage = data; 
   });

   this.skillForm.get("colorBackground").valueChanges
   .subscribe(data => {
     this.dataModel.colorBackground = data;  
   });

   this.skillForm.get("color").valueChanges
   .subscribe(data => {
     this.dataModel.colorBorder = data
     this.dataModel.color = data; 
   });


  }

  submit(){
    console.log(this.dataModel);
  }
  
  openModal(id:Number) {
    this.modalVisible = true; 
     
    let data = this.skills.filter(data => {
      if(data.id == id) return data ; 
    }); 
    
    this.dataModel = {...data[0]};

    setValueForm(this.skillForm, this.dataModel); 
    // enableForm(this.skillForm, false);
  }
  closeModal() { 
    this.modalVisible = false;
  }

  // Method rest
  getSkill(skill: Skill[]) {
    
  }
  getSkills(skills: Skill[]) {
    this.skills = skills; 
  }

  // fuction generales

  mapearData = (valor: number ) =>  (-135 + ( valor * 1.8 )).toString() ;
  
  retorna(data){
    return data; 
  }

  setColorBackgroud(color: String) {
    return `20px solid ${color}`; 
  }

  setColorBorder(color: String) {
    return `20px solid ${color}`
  } 

  setRotate(value) {
    console.log(`rotate(${value}deg)`); 
    return `rotate(${value}deg)`
  }
  // mapearData = (valor:Number ) => parseInt(-135 + (valor * 1.8));

}

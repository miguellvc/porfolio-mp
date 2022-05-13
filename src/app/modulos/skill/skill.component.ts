import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


import { Skill } from 'src/app/interfaces/skill.interface';
import { AuthService } from 'src/app/services/auth.service';
import { SkillService } from 'src/app/services/skill.service';

import { animate } from 'src/app/util/animate';
import { enableForm, setValueForm } from 'src/app/util/form';
import { swalDelete, swalIsConfirmed, swalError } from 'src/app/util/swal';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  
  public modalVisible:boolean = false; 
  public skills : Skill[];  
  public dataModel : Skill = { language: '', 
                               porcentage: 0, 
                               background: '', 
                               border: '', 
                               color: '', 
                               rotate: '' };
  public iconFloatVisible:boolean; 
  
  private skill:Skill;
  private modifySkill = true;

  constructor(private _skill : SkillService,
              private _auth: AuthService,
              private fb : FormBuilder) { }

  public skillForm = this.fb.group({
    language: ['', [ Validators.required]],
    porcentage: ['', [ Validators.required ]],
    background: ['', [ Validators.required ]],
    color: ['', [ Validators.required ]],
  })

  ngOnInit(): void {
    animate('skill', 3000, 'top', '-100px'); 
    this.getSkills();
   
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
  
     this.skillForm.get("background").valueChanges
     .subscribe(data => {
       this.dataModel.background = data;  
     });
  
     this.skillForm.get("color").valueChanges
     .subscribe(data => {
       this.dataModel.border = data
       this.dataModel.color = data; 
     });

    
  }

  submit(){
    if(this.modifySkill) {
     this.updateSkill(); 
      return; 
    }

    this.postSkill(); 
  }
  
  openModal(id:Number) {
    this.modalVisible = true;
    this.iconFloatVisible = true; 
    console.log("data model", this.dataModel); 
    this.getSkill(id);
  }

  closeModal() { 
    this.modalVisible = false;
    this.setEducationForm(); 
  }

  newSkill(value:boolean) {
    this.iconFloatVisible = !value;
    this.modifySkill = false; 
    this.setEducationForm(null, value); 
  }
  
  editSkill(value:boolean) {
    // TODO
    this.iconFloatVisible = !value;
    enableForm(this.skillForm, value);
  }

  cancelAction(value:boolean) {
    this.iconFloatVisible = !value; 
    this.setEducationForm(this.skill); 
  }

  setEducationForm(skill:Skill = null, valueForm = false) {
    let dataForm:Skill = {language: '', porcentage: 30, background: '', border: '', color: '', rotate: ''};
    if(skill != null){ dataForm = skill}
    setValueForm(this.skillForm, dataForm); 
    enableForm(this.skillForm, valueForm);
  }
  
  actionConfirmed(msg:String) {
    this.skills = []; 
    this.getSkills();
    this.closeModal();
    swalIsConfirmed(msg);
   }

   mapearData = (valor: number ) =>  (-135 + ( valor * 1.8 )).toString() ;
  
   setColorBackgroud(color: String) {
     return `20px solid ${color}`; 
   }
 
   setColorBorder(color: String) {
     return `20px solid ${color}`
   } 
 
   setRotate(value) {
     return `rotate(${value}deg)`
   }

  // Method rest
  getSkill(id:Number) {
    this._skill.getSkill(id, this._auth.getToken())
    .subscribe(skill =>{
      this.setEducationForm(skill);
      this.dataModel.id = skill.id; 
      this.skill = {...skill};
    })
  }
  
  getSkills() {
    this._skill.getSkills()
      .subscribe((skills:Skill[])=>{
        this.skills = skills;
        console.log("se ejecuta getSkills", this.skills); 
      })
  }
  
  updateSkill() {
    this._skill.updateSkill(this.dataModel, this._auth.getToken())
    .subscribe((res:string[]) => {
      console.log("respuesta de res", res);
      if(res[0] == "ok") {
        swalIsConfirmed("Se editó correctamente el componente") 
        this.getSkills();
        this.closeModal() 
      }else{
        swalError("no fue posible llevar a caba la actulización del componente"); 
      }
    })
  }


  postSkill(){
     const skill:Skill = { 
       ...this.skillForm.value,
       border: this.skillForm.value.color,
       rotate : this.mapearData(this.skillForm.value.porcentage)
     } 
     this._skill.newSkill(skill, this._auth.getToken())
      .subscribe((skill:Skill)=>{
        if(skill!= null){
          this.actionConfirmed("El archivo se añadío correctamente");
        }
      });
     
  }
  
  deleteSkill(content, idSkill) {
    if(idSkill === 372343873403247) {
      swalError('Error, este component no se puede eliminar'); 
      return; 
    }
  
    swalDelete({content})
      .then((result) => {
        if (result.isConfirmed) {    
          this._skill.deleteSkill(idSkill, this._auth.getToken())
          .subscribe((resp)=>{
            console.log(resp)
            if(resp[0] == "ok"){
               this.actionConfirmed("El archivo fue eliminado correctamente");
            }
          })
        } 
      })
  }

  

}

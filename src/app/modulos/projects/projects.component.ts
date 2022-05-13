import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { ProjectsService } from 'src/app/services/projects.service';

import { Project } from 'src/app/interfaces/projects.interface';

import { animate } from 'src/app/util/animate';
import { swalDelete, swalError, swalIsConfirmed } from 'src/app/util/swal';
import { getValueForm, setValueForm, enableForm } from 'src/app/util/form';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  modalVisible : boolean = false; 
  projects : Project[]; 
  project : Project; 
  dataModel : Project = {title: '', url_Img: '', url_Git: ''}
  iconFloatVisible : boolean = true; 
  modifyProject:boolean;
  constructor(private _project : ProjectsService,
              private _auth: AuthService,
              private fb : FormBuilder ) { }

  public projectForm = this.fb.group({
    title: ['', [ Validators.required]], 
    url_Img: ['', [ Validators.required ]],
    url_Git: ['', [ Validators.required ]]
  });

  ngOnInit(): void {
    animate('headline', 3000, 'top', '-180px');
    getValueForm(this.dataModel, this.projectForm); 
    this.getProjects();
  }

  submit() {
    
    if(this.modifyProject) {
      this.updateProject();
      return;
    } 

    
    this.postProject();
  }
  
  openModal(id:Number) {
    this.modalVisible = true; 
    this.getProject(id);
  }

  closeModal() {
    this.cancelAction(true, false);
    this.modalVisible = false; 
  }

  // TODO
  newProject(value:boolean) {
    this.iconFloatVisible = !value;
    this.modifyProject = false; 
    this.setProjectForm(null, value);  
  }

  editProject(value: boolean) {
    this.iconFloatVisible = value; 
    this.modifyProject = true; 
    this.setProjectForm(this.project, !value); 
  }
  
  onNavigate(url: string){ 
    window.open(url, "_blank"); 
  }
  
  cancelAction(value: boolean, actionCancel = true) {
    
    this.iconFloatVisible = value;
    if(actionCancel) {
      this.setProjectForm(this.project); 
      return; 
    }
    this.setProjectForm();
  }

  setProjectForm(project:Project = null, valueForm = false) {
    let dataForm:Project = {title: '', url_Img: '', url_Git: ''}
    if(project != null){ dataForm = project}
    setValueForm(this.projectForm, dataForm); 
    enableForm(this.projectForm, valueForm);
  }

  actionConfirmed(msg:String) {
    this.projects = []; 
    this.getProjects();
    this.closeModal();
    swalIsConfirmed(msg);
   }
  // Method res
  
  getProject(id:Number) {
    this._project.getProject(id, this._auth.getToken())
    .subscribe(project =>{
      this.setProjectForm(project);
      this.dataModel.id = project.id; 
      this.project = {...project};
    })
  }
  
  getProjects(){
    this._project.getProjects()
      .subscribe((projects:Project[])=>{
        this.projects = projects;
        console.log("se ejecuta getprojects", this.projects); 
      })    
  }

  updateProject(){
    this._project.updateProject(this.dataModel, this._auth.getToken())
    .subscribe((res:string[]) =>{
      console.log("respuesta de res", res);
      if(res[0] == "ok") {
        swalIsConfirmed("Se editó correctamente el componente") 
        this.getProjects();
        this.closeModal() 
      }else{
        swalError("no fue posible llevar a caba la actulización del componente"); 
      }
    })
  }

  postProject(){
    console.log(this.projectForm.value);
    
    this._project.newProject(this.projectForm.value, this._auth.getToken())
     .subscribe((project:Project)=>{
       if(project!= null){
         this.actionConfirmed("El archivo se añadío correctamente");
       }
     });
    
 }
 
  
  deleteProject(content, idProject) {
    if(idProject === 2983273283226) {
      swalError('Error, este component no se puede eliminar'); 
      return; 
    }
  
    swalDelete({content})
      .then((result) => {
        if (result.isConfirmed) {    
          this._project.deleteProject(idProject, this._auth.getToken())
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

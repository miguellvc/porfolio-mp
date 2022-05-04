import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { ProjectsService } from 'src/app/services/projects.service';

import { Project } from 'src/app/interfaces/projects.interface';

import { animate } from 'src/app/util/animate';
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
  dataModel : Project = {title: '', urlImg: '../../../assets/img/undraw_Proud_coder_re_exuy.png', urlGit: 'https://github.com/'}
  iconFloatVisible : boolean = true; 

  constructor(private _project : ProjectsService,
              private _auth: AuthService,
              private fb : FormBuilder ) { }

  public projectForm = this.fb.group({
    title: ['', [ Validators.required]], 
    urlImg: ['', [ Validators.required ]],
    urlGit: ['', [ Validators.required ]]
  });

  ngOnInit(): void {
    animate('headline', 3000, 'top', '-180px');
    getValueForm(this.dataModel, this.projectForm); 
    this.getProjects();
  }

  submit() { 
    console.log("se ejecuta proyecto", this.projectForm.value);
  }
  
  openModal(id:Number) {
    this.modalVisible = true; 
    this.getProject(id);
  }

  closeModal() {
    this.modalVisible = false; 
  }

  // TODO
  newProject(value:boolean) {
    this.iconFloatVisible = value; 
  }

  editProject(value: boolean) {
    this.iconFloatVisible = value; 
  }
  
  deleteProject(content, id) {

  }

  onNavigate(url: string){ 
    window.open(url, "_blank"); 
  }
  
  cancelAction(value: boolean) {
    console.log("se ejecuta cancelar");
    this.iconFloatVisible = value; 
  }

  setProjectForm(project:Project = null, valueForm = false) {
    let dataForm:Project = {title: '', urlImg: '', urlGit: ''}
    if(project != null){ dataForm = project}
    setValueForm(this.projectForm, dataForm); 
    enableForm(this.projectForm, valueForm);
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
  
}

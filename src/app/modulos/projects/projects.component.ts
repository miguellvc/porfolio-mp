import { Component, OnInit } from '@angular/core';
import { animate } from 'src/app/util/animate';

import { Project } from 'src/app/interfaces/projects.interface';

import { ProjectsService } from 'src/app/services/projects.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  modalVisible : boolean = false; 
  projects : Project[] = []; 
  dataModel : Project = {id: 1, title: '', urlImg: '', urlGit: ''}
  iconFloatVisible : boolean = true; 




  





  constructor(private _project : ProjectsService,
              private fb : FormBuilder ) { }

  public projectForm = this.fb.group({
    title: ['', [ Validators.required]], 
    urlImg: ['', [ Validators.required ]],
    urlGit: ['', [ Validators.required ]]
  });

  ngOnInit(): void {
    animate('headline', 3000, 'top', '-180px');
    this.getProjects(this._project.getProjects()); 
  }

  submit() { 
    console.log("se ejecuta proyecto", this.projectForm.value);
  }
  
  openModal(id:Number) {
    this.modalVisible = true; 

    
    // let data = this.educationData.filter(data => {
    //   if(data.id == id) return data ; 
    // }); 
    
    // this.dataModel = {...data[0]};

    // setValueForm(this.educationForm, this.dataModel); 
    // enableForm(this.educationForm, false);
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

  getProjects(projects: Project[]){
    this.projects = projects; 
  }
  onNavigate(url: string){ 
    window.open(url, "_blank"); 
  }
  
  cancelAction(value: boolean) {
    console.log("se ejecuta cancelar");
    this.iconFloatVisible = value; 
  }
  // Method res
  
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 

// modules 
import { SharedModule } from '../shared/shared.module';
import { ModulosComponentModule } from '../modulos/modulos-component.module';

// components
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ModulosComponentModule
  ], 
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }

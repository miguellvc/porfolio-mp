import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// modules
import { AuthModule } from '../auth/auth.module';
import { SharedModule } from '../shared/shared.module';


// components
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';

@NgModule({
  declarations: [
    BannerComponent,
    AboutComponent,
    EducationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    SharedModule
  ],
  exports: [
    BannerComponent,
    AboutComponent,
    EducationComponent
  ]
})
export class ModulosComponentModule { }

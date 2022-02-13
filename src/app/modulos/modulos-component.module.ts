import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';


// modules
import { AuthModule } from '../auth/auth.module';
import { SharedModule } from '../shared/shared.module';


// components
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { SkillComponent } from './skill/skill.component';

@NgModule({
  declarations: [
    BannerComponent,
    AboutComponent,
    EducationComponent,
    SkillComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    SharedModule,
    NgChartsModule
  ],
  exports: [
    BannerComponent,
    AboutComponent,
    EducationComponent,
    SkillComponent
  ]
})
export class ModulosComponentModule { }

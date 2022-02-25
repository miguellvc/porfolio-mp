import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';

import { NgxColorsModule } from 'ngx-colors';

// modules
import { AuthModule } from '../auth/auth.module';
import { SharedModule } from '../shared/shared.module';


// components
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { SkillComponent } from './skill/skill.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    BannerComponent,
    AboutComponent,
    EducationComponent,
    SkillComponent,
    ProjectsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    SharedModule,
    NgChartsModule,
    NgxColorsModule
  ],
  exports: [
    BannerComponent,
    AboutComponent,
    EducationComponent,
    SkillComponent,
    ProjectsComponent
  ]
})
export class ModulosComponentModule { }

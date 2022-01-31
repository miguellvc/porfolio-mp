import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { AuthModule } from '../auth/auth.module';
import { FormsModule } from '@angular/forms';

// components
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    BannerComponent,
    AboutComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthModule
  ],
  exports: [
    BannerComponent,
    AboutComponent
  ]
})
export class ModulosComponentModule { }

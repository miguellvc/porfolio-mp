import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// módulos

import { AuthModule } from '../auth/auth.module';

// componentes
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { ModalComponent } from './modal/modal.component';

// 

import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthModule
  ],
  exports: [
    HeaderComponent,
    ContentComponent,
    FooterComponent, 
  ]
})
export class ModulosComponentModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// moduls
import { AuthModule } from '../auth/auth.module';

// components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EditingIconsComponent } from './editing-icons/editing-icons.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    EditingIconsComponent
  ],
  imports: [
    CommonModule,
    AuthModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    EditingIconsComponent
  ]
})
export class SharedModule { }

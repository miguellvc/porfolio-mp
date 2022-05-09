import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// moduls
import { AuthModule } from '../auth/auth.module';

// components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EditingIconsComponent } from './editing-icons/editing-icons.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    EditingIconsComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    AuthModule, 
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    EditingIconsComponent, 
    SpinnerComponent
  ]
})
export class SharedModule { }

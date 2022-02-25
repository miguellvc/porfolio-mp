import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { ColorPickerModule } from 'ngx-color-picker';
import { NgxColorsModule } from 'ngx-colors';
// import { NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// modules
import { ModulosComponentModule } from './modulos/modulos-component.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';
import { AngularFireModule } from '@angular/fire';

import { environment } from '../environments/environment';

// components


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModulosComponentModule,
    PagesModule,
    AuthModule,
    NgxColorsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

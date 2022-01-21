import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// módulos
import { ModulosComponentModule } from './modulos/modulos-component.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

// componentes
import { HomeComponent } from './pages/home/home.component';
import { ListarDataComponent } from './pages/listar-data/listar-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListarDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModulosComponentModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

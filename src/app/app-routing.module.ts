import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListarDataComponent } from './pages/listar-data/listar-data.component';


const routes: Routes = [
  {
    path: 'home', 
    component: HomeComponent
  },
  {
    path: 'listar-data259',
    component: ListarDataComponent
  },
  {
    path: '**',
    pathMatch : 'full',
    redirectTo : 'home'
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

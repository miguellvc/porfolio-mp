import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuario } from '../../models/models';

@Component({
  selector: 'app-listar-data',
  templateUrl: './listar-data.component.html',
  styleUrls: ['./listar-data.component.css']
})
export class ListarDataComponent implements OnInit {

  public usuarios: Usuario[] = []; 

  constructor(private _usuario: UsuariosService) { }

  ngOnInit(): void {

      this._usuario.getUsuarios()
      .subscribe(usuario =>{
          this.usuarios = usuario; 
          console.log("usuarios", this.usuarios);
      })

  }



}

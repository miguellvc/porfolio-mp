import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { modulos, Usuario } from "../../models/models";
import { UsuariosService } from '../../services/usuarios.service';
import Swal from "sweetalert2";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.css"],
})
export class ContentComponent implements OnInit {
  //data
  usuario: Usuario = {
    nombre : "",
    apellido : "",
    dni : "",
    correo : "",
    sede : "",
    localidad : "",
  };
  public btn = false; 
  public campos = false; 
  constructor(private _usuarios: UsuariosService,
              private _sanitizer: DomSanitizer) {}

  ngOnInit(): void {

    const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
  }

  /*Métodos*/
  newUsuario(form: NgForm) {
    if(form.valid != true) {
        console.log("todos los campos son obligatorios");
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Todos los campos son obligatorios',
        });
        return;
    }
    console.log(this.usuario);
    this._usuarios.newUsuario(this.usuario)
    .then(resp =>{
      Swal.fire({
        icon: 'success',
        title: 'Usted se registro correctamente',
        showConfirmButton: false
      })
      console.log(resp);
    })
  }

  verificar(){
    var clave = "dni"
    var valor = this.usuario.dni
    this._usuarios.getUsuario(clave, valor)
    .subscribe(usuario =>{
      console.log(usuario);
      if(usuario.length != 0) {
        this.usuario = {
          nombre : usuario[0].nombre,
          apellido : usuario[0].apellido,
          dni : usuario[0].dni,
          correo : usuario[0].correo,
          sede : usuario[0].sede,
          localidad : usuario[0].localidad,
        }
        this.campos = true;
        this.btn = true; 
      }
    })
  }
  
  // método para embeber vídeos. 

  getVideoIframe(url) {
    var video, results;
 
    if (url === null) {
        return '';
    }
    results = url.match('[\\?&]v=([^&#]*)');
    video   = (results === null) ? url : results[1];
    return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);   
    }

  /*Contenidos del curso*/
  public modulos: modulos[] = [
    {
      title: "Introducción HTML, CSS, Javascript, Bootstrap",
      multimedia: 'QTcUyVglYuw',
      text: `El módulo propone comenzar por las bases en el Desarrollo Web, aprendiendo semántica HTML. Una vez comprendido la estructura HTML con sus respectivas etiquetas, pasaremos a darle estilo mediante CSS, con lo cual iremos aprendiendo de manera combinada estos dos lenguajes. 
      Una vez que hayamos comprendido las bases del desarrollo web, es necesario darle interactividad, funcionalidad, a los elementos HTML, esto lo lograremos con Javascript.
      Por último, abordaremos, un kit de herramientas, como lo es Bootstrap el cual facilita el desarrollo de una web, comprenderemos los fundamentos de dicha herramienta, así también veremos algunos de sus componentes.
      `,
    },
    {
      title: "Proyecto integrador “Maquetando un Blog”",
      multimedia: "hAtvlrvc7Zs",
      text: `Para reforzar todo lo abordado en el módulo anterior, haremos una primera práctica, en ella maquetaremos un Blog, incorporaremos en el mismo, Bootstrap. No será un proyecto aislado ya que nos servirá como materia prima en el módulo V, de este modo el estudiante comprenderá la fase que implica el desarrollo de un sitio web.`,
    },
    //    https://youtu.be/hAtvlrvc7Zs
    {
      title: "Lenguajes PHP y gestor de Base de Datos MySQL",
      multimedia: "6D1Ivc2ox4E",
      text: `Estudiaremos las principales estructuras del lenguaje PHP, comprenderemos su sintaxis. El estudio lo haremos en primera instancia desde el paradigma estructurado para luego pasar al paradigma orientado a objetos. 
      Integraremos PHP con MySQL, con lo cual se hará necesario el estudio de dicho gestor de base de datos, de este modo podremos generar consultas que permitan traer datos desde una base de datos. 
      `,
    },
    {
      title: "Proyecto integrador “Sistema web: Gestión de Peliculas”",
      multimedia: "CFfYj2YR4Jk",
      text: `Crearemos nuestra primera aplicación web dinámica, en la misma integraremos contenidos abordados en las unidades anteriores. 
      El “Sistema web: Gestión de Películas”, consiste en un CRUD básico, pero totalmente funcional. Haremos desde el diseño de la base de datos, la maquetación del Front end, hasta lograr consumir los datos haciendo uso de PHP y presentándolo en la vista.       
      `,
    },
    {
      title: "Proyecto integrador “Aplicación web blog multiusuario”. ",
      multimedia: "wDWMBATYspA",
      text: `En este módulo, realizaremos un sistema web dinámico para lograr afianzar todo lo abordado, integraremos HTML, CSS, Bootstrap, PHP, MySQL. 
      Entre las acciones que demandará el proyecto son: 
        Generar las vistas. 
        Manipular datos (insertar, leer, modificar, eliminar). 
        Crear cuentas de usuarios.
        Autenticar usuarios y crear sesiones. 
        Navegar entre páginas. 
        Generar páginas protegidas, entre otras actividades.
        El desarrollo se hará bajo el Patrón de diseño MVC.
      
       
      `,
    },
  ];
}

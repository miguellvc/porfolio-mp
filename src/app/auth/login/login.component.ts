import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

import { User } from '../../interfaces/user.interface'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  formSubmitted = false;
  btnDisabled = false; 
  constructor(private _auth : AuthService,
              private fb: FormBuilder) { }

  public loginForm = this.fb.group({
    mail: ['' , [ Validators.required, Validators.email ] ],
    password: [ '', Validators.required ]
  });

  ngOnInit(): void {
    
  }

  login(){
    this.formSubmitted = true;
    
    if ( this.loginForm.invalid ) {
      return;
    }
  
    this.btnDisabled = true; 
    this._auth.login(this.loginForm.value) 
       .subscribe(data => {
          this.btnDisabled = false; 
          if(data == null) {
            Swal.fire({
              allowOutsideClick: false,
              title: "Error",
              text: "No se pudo iniciar sesión, intente nuevamente",
              icon: "error",
            });
          }
         
       }) 
  }
  
  campoNoValido( campo: string ): boolean {
    if ( this.loginForm.get(campo).invalid && this.formSubmitted ) {
      return true;
    } else {
      return false;
    }

}
 
  closeModalLogin() {
    
    if(this.btnDisabled) {
      return; 
    }

    this._auth.$modal.emit(false); 
  }

}

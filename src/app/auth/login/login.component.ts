import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  public formSubmitted = false;

  constructor(private _auth : AuthService,
    private fb: FormBuilder) { }

  public loginForm = this.fb.group({
    email: ['' , [ Validators.required, Validators.email ] ],
    password: ['', Validators.required ],
    remember: [false]
  });



  ngOnInit(): void {}

  login(){
    this.formSubmitted = true;
    
    if ( this.loginForm.invalid ) {
      return;
    }
    
    console.log(this.loginForm.value);
  }
  
  campoNoValido( campo: string ): boolean {
        
    console.log("se ejecuta el método")
    if ( this.loginForm.get(campo).invalid && this.formSubmitted ) {
      return true;
    } else {
      return false;
    }

}
 
  closeModalLogin() {
    this._auth.$modal.emit(false); 
  }

}

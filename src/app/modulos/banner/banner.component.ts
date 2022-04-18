import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/services/auth.service';
import { BannerService } from 'src/app/services/banner.service';


import Swal from 'sweetalert2';

// import functions
import { setValueForm, enableForm } from 'src/app/util/util';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  public modalVisible:boolean = false; 
  public formSubmitted = false;
  public banner; 
  
  public loading = false; 
  

  constructor(private _auth: AuthService, 
              private fb: FormBuilder, 
              private _banner: BannerService
              ) { 
  }

  public bannerForm:FormGroup = this.fb.group({
    name: [ '', [ Validators.required ] ], 
    training: [ '', [ Validators.required ] ], 
    description: [ '', [ Validators.required ] ], 
    urlImgBanner: [ 'assets/img/personal_img.png', [ Validators.required ] ]
  })


  ngOnInit(): void {

    this.getBanner(this._banner.getBanner().getBanner); 
    setValueForm(this.bannerForm, this.banner); 
    
    // animate('banner', 3000, 'top', '-100px'); 
  }
  
  submit() {
    this.formSubmitted = true; 
  

    enableForm(this.bannerForm, false ); 
    
    if ( this.bannerForm.invalid ) {
      return;
    }
    
    this.loading = true; 
    // llamada al método para actulizar el banner 

    setTimeout(()=>{
      this._banner.updateBanner(this.bannerForm.value); 
      this.banner = this._banner.getBanner(); 
      console.log("se ejecuta la función setInterval");  
      this.loading = false; 
      enableForm(this.bannerForm, true ); 
      Swal.fire({
        allowOutsideClick: false,
        title: "Cambios registrados",
        text: "Se registraron los cambios con éxito",
        icon: "success",
      });
    },5000)
    // console.log(this.bannerForm.value); 
  }

  getBanner(banner) {
    this.banner = banner; 
    
  }
  
  invalidFiel( value: string ): boolean {

    console.log("se ejecuta el método")
    if ( this.bannerForm.get(value).invalid && this.formSubmitted ) {
      return true;
    } else {
      return false;
    }
  }
 
  openModal(){
    this.modalVisible = true; 
  }

  closeModal(){  
     this.modalVisible = false;
  }

}

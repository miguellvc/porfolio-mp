import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BannerService } from 'src/app/services/banner.service';

// import functions
import { setValueForm, enableForm } from 'src/app/util/util';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  public openModalBanner:boolean = true; 
  public userLogin:boolean; 
  public formSubmitted = false;
  public banner; 
  
  public loading = false; 
  

  constructor(private _auth: AuthService, 
              private fb: FormBuilder, 
              private _banner: BannerService
              ) { 
    this.userLogin = this._auth.userLogin; 
  }

  public bannerForm:FormGroup = this.fb.group({
    name: [ '', [ Validators.required ] ], 
    training: [ '', [ Validators.required ] ], 
    description: [ '', [ Validators.required ] ], 
    urlImgBanner: [ 'assets/img/personal_img.png', [ Validators.required ] ]
  })


  ngOnInit(): void {
    this.banner = this._banner.getBanner();
    setValueForm(this.bannerForm, this.banner); 
  }
  
  submit() {
    this.formSubmitted = true; 
    enableForm(this.bannerForm, this.banner, false ); 
    
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
      enableForm(this.bannerForm, this.banner, true ); 
    },5000)
    // console.log(this.bannerForm.value); 
  }
  
  // disabledForm(){
  //   this.bannerForm.controls['name'].disable();
  //   this.bannerForm.controls['training'].disable();
  //   this.bannerForm.controls['description'].disable();
  //   this.bannerForm.controls['urlImgBanner'].disable();
  // }




  invalidFiel( value: string ): boolean {
       
    console.log("se ejecuta el método")
    if ( this.bannerForm.get(value).invalid && this.formSubmitted ) {
      return true;
    } else {
      return false;
    }
  }
 

  closeModalBanner(){
     this.openModalBanner = false;
  }

}

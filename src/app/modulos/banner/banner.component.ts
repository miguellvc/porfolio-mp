import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { BannerService } from 'src/app/services/banner.service';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  public openModalBanner:boolean = false; 
  public userLogin:boolean; 
  public formSubmitted = false;
  public banner; 

  constructor(private _auth: AuthService, 
              private fb: FormBuilder, 
              private _banner: BannerService
              ) { 
    this.userLogin = this._auth.userLogin; 
  }

  public bannerForm = this.fb.group({
    name: [ '', [ Validators.required ] ], 
    training: [ '', [ Validators.required ] ], 
    description: [ '', [ Validators.required ] ], 
    urlImgBanner: [ 'assets/img/personal_img.png', [ Validators.required ] ]
  })


  ngOnInit(): void {
    this.banner = this._banner.getBanner();
    this.setValueForm(); 
  }
  
  submit() {
    this.formSubmitted = true; 

    // if ( this.bannerForm.invalid ) {
    //   return;
    // }

    // llamada al método para actulizar el banner 
    console.log(this.bannerForm.value); 
  }
  

  setValueForm(){
      this.bannerForm.controls['name'].setValue(this.banner.name);
      this.bannerForm.controls['training'].setValue(this.banner.training);
      this.bannerForm.controls['description'].setValue(this.banner.description);
      this.bannerForm.controls['urlImgBanner'].setValue(this.banner.urlImgBanner);
  }

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

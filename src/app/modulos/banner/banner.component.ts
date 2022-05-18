import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/services/auth.service';
import { BannerService } from 'src/app/services/banner.service';

import { Banner } from 'src/app/interfaces/banner';


// import functions
import { setValueForm, enableForm } from 'src/app/util/form';
import { animate } from 'src/app/util/animate';
import { swalIsConfirmed, swalError } from 'src/app/util/swal';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  public modalVisible:boolean = false; 
  public formSubmitted = false;
  btnDisabled = false;
  @Input() banner: Banner;

  public loading = false; 
  

  constructor(private _auth: AuthService, 
              private fb: FormBuilder, 
              private _banner: BannerService
              ) { 
  }

  public bannerForm:FormGroup = this.fb.group({
    title: [ '', [ Validators.required ] ], 
    sub_Title: [ '', [ Validators.required ] ], 
    content: [ '', [ Validators.required ] ], 
    url_Img: [ 'assets/img/personal_img.png', [ Validators.required ] ]
  })


  ngOnInit(): void { 
    animate('banner', 2000, 'bottom', '0px'); 
  }
  
  submit() {
    this.formSubmitted = true;  
    this.loading = true;
    if ( this.bannerForm.invalid ) {
      return;
    }

    this.updateBanner();
  }
  
  invalidFiel( value: string ): boolean {

    if ( this.bannerForm.get(value).invalid && this.formSubmitted ) {
      return true;
    } else {
      return false;
    }
  }

  setBannerForm(banner:Banner, valueForm = false){
    setValueForm(this.bannerForm, banner); 
    enableForm(this.bannerForm, valueForm);
  }
 
  openModal(){
    this.setBannerForm(this.banner[0], true);
    this.modalVisible = true; 
  }

  closeModal(){  
     this.modalVisible = false;
  }

  // Method rest

  updateBanner() {
      
    let banner:Banner = this.bannerForm.value; 
    
    banner.id = this.banner[0].id;

      this._banner.updateBanner(banner, this._auth.getToken())
        .subscribe(res =>{
          if(res == "ok") {
            swalIsConfirmed("El banner se modificó correctamente") 
            this.banner[0] = banner;
            this.closeModal()
          }else{
            swalError("no se pudo actulizar el banner"); 
          }

          this.loading = false; 
        })
  }

}

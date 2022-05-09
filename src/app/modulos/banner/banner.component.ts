import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/services/auth.service';
import { BannerService } from 'src/app/services/banner.service';

import { Banner } from 'src/app/interfaces/banner';

import Swal from 'sweetalert2';

// import functions
import { setValueForm, enableForm } from 'src/app/util/form';
import { animate } from 'src/app/util/animate';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  public modalVisible:boolean = false; 
  public formSubmitted = false;
  
  @Input() banner: Banner;

  public loading = false; 
  

  constructor(private _auth: AuthService, 
              private fb: FormBuilder, 
              private _banner: BannerService
              ) { 
  }

  public bannerForm:FormGroup = this.fb.group({
    title: [ '', [ Validators.required ] ], 
    sub_title: [ '', [ Validators.required ] ], 
    content: [ '', [ Validators.required ] ], 
    url_img: [ 'assets/img/personal_img.png', [ Validators.required ] ]
  })


  ngOnInit(): void { 
    animate('banner', 3000, 'top', '-100px'); 
  }
  
  submit() {
    this.formSubmitted = true;  
    
    if ( this.bannerForm.invalid ) {
      return;
    }
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
    console.log("contenido de banner", this.banner);
    this.setBannerForm(this.banner[0], true);
    this.modalVisible = true; 
  }

  closeModal(){  
     this.modalVisible = false;
  }

  // Method rest



}

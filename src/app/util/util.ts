import { FormBuilder, Validators } from '@angular/forms';

export class FormValidator {

    private forms; 

    private formBuilder: FormBuilder;

    constructor(private formGroup){
        this.forms = this.formBuilder.group(this.formGroup);
    }

    validate() {
        
    }

    getForms(){
        this.forms;
    }
     
}




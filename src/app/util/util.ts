import { FormGroup } from "@angular/forms";

export const setValueForm = (form:FormGroup, content:Object) => {
    
    /*
        El método Object.keys() devuelve un array con las propiedades names de un objeto, 
        en el mismo orden como se obtienen en un loop normal.
    */ 
    let keysObject = Object.keys(content); 
    let propiedadesObject = Object.values(content); 

    for(let i = 0; i < keysObject.length; i++) {

        form.controls[keysObject[i]].setValue(propiedadesObject[i]);
    
    }

}


export const enableForm = (form:FormGroup, content:Object, enable:boolean ) => {
    
    let keysObject = Object.keys(content); 
        
    
    if(enable) {
        for(let i = 0; i < keysObject.length; i++) {

            form.controls[keysObject[i]].enable();
        
        } 
    }else {
        for(let i = 0; i < keysObject.length; i++) {

            form.controls[keysObject[i]].disable();
        
        }
    }

  }


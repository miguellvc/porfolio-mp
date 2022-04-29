import { FormGroup } from "@angular/forms";

export const setValueForm = (formGroup:FormGroup, content) => {
    
    /*
        El método Object.keys() devuelve un array con las propiedades names de un objeto, 
        en el mismo orden como se obtienen en un loop normal.
    */
    const updateContent = {...content}
    if(updateContent.id != undefined ) { delete updateContent.id} ;  
    const contentObject = Object.values(updateContent); 
    Object.keys(formGroup.controls).forEach((key, index) => { formGroup.controls[key].setValue(contentObject[index])});  

}


export const enableForm = (formGroup:FormGroup, enable:boolean ) => {
    
    let keysObject = Object.keys(formGroup.controls); 
    
    enable ? 
    keysObject.forEach( key => formGroup.controls[key].enable() )
    : 
    keysObject.forEach( key => formGroup.controls[key].disable() );

  }


export const getValueForm = <T>(object: T,  formGroup:FormGroup) => {
  for(const property in object){
    formGroup.get(property).valueChanges
      .subscribe(data => {
        object[property] = data; 
      });
  }
}



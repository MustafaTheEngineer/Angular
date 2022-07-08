import { AbstractControl, ValidationErrors } from "@angular/forms";

export class ImageValidators{
    
    static isValidExtension(control:AbstractControl): ValidationErrors | null {
        const v =  control.value as string;
        
        if(v){
            if(v.endsWith('.jpg') || v.endsWith('.png') || v.endsWith('.jpeg') || v.endsWith('.webp'))
            return null;
        else
            return {
                wrongExtension: true
            }
        }else
            return null;

        
        
    }
}
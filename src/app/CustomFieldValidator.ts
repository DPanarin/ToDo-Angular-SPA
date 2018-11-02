import { AbstractControl } from '@angular/forms';

export class CustomFieldValidator {
    static numberFieldValidator (control: AbstractControl): {[key: string]: boolean} | null {
        const formValue = control.value;
        if (!isNaN(formValue) && parseFloat(formValue) > 0) {
            return null;
        }
        return {numberFieldValidate: true};
    }
 }

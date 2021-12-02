import { Directive } from '@angular/core';
import { AbstractControl, Validator, NG_VALIDATORS } from '@angular/forms';
import { invalidNames } from 'src/app/sample-data/sample-data';

@Directive({
  selector: '[appInputValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: InputValidatorDirective,
      multi: true,
    },
  ],
})
export class InputValidatorDirective implements Validator {
  validate(control: AbstractControl): { [key: string]: any } | null {
    if (invalidNames.includes(control.value)) {
      return { phoneNumberInvalid: true };
    }
    return null;
  }
}

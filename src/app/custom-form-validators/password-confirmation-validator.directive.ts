import { Directive } from '@angular/core';
import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
  Validator,
  NG_VALIDATORS,
} from '@angular/forms';

@Directive({
  selector: '[appPasswordConfirmationValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordConfirmationValidatorDirective,
      multi: true,
    },
  ],
})
export class PasswordConfirmationValidatorDirective implements Validator {
  validate(control: AbstractControl): { [key: string]: any } | null {
    if (control.value) {
      return { nameIsInvalid: true };
    }
    return null;
  }
}

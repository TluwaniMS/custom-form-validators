import { Directive } from '@angular/core';
import { AbstractControl, Validator, NG_VALIDATORS } from '@angular/forms';
import { PasswordValidationService } from 'src/app/services/password-validation-service.service';

@Directive({
  selector: '[appPasswordConfirmationValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordValidatorDirective,
      multi: true,
    },
  ],
})
export class PasswordValidatorDirective implements Validator {
  constructor(private passwordValidationService: PasswordValidationService) {}
  validate(control: AbstractControl): { [key: string]: any } | null {
    const passwordValuesAreSatisfied =
      this.passwordValidationService.validatePassword(control.value);
    const passwordLengthIsSatisfied =
      this.passwordValidationService.validatePasswordLength(control.value);

    const passwordIsValid =
      passwordValuesAreSatisfied && passwordLengthIsSatisfied;

    return passwordIsValid ? { passwordIsValidated: true } : null;
  }
}

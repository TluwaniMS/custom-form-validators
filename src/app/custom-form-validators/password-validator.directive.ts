import { Directive } from '@angular/core';
import { AbstractControl, Validator, NG_VALIDATORS } from '@angular/forms';
import {
  specialCharactersRegEx,
  lowerCaseLettersRegEx,
  upperCaseLettersRegEx,
  numericsRegEx,
} from 'src/app/sample-data/sample-data';

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
  validate(control: AbstractControl): { [key: string]: any } | null {
    const passwordHasUpperCase = upperCaseLettersRegEx.test(control.value);

    const passwordHasLowerCase = lowerCaseLettersRegEx.test(control.value);

    const passwordHasNumerics = numericsRegEx.test(control.value);

    const passwordHasSpecialCharacters = specialCharactersRegEx.test(
      control.value
    );

    const requiredPasswordValuesAreSatisfied =
      passwordHasUpperCase &&
      passwordHasLowerCase &&
      passwordHasNumerics &&
      passwordHasSpecialCharacters;

    const passwordLenghtIsBiggerThanEight = control.value.length >= 8;

    const passwordIsValid =
      requiredPasswordValuesAreSatisfied && passwordLenghtIsBiggerThanEight;

    return !passwordIsValid ? { passwordIsValidated: true } : null;
  }
}

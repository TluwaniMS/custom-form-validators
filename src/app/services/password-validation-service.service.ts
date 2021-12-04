import { Injectable } from '@angular/core';
import {
  specialCharactersRegEx,
  lowerCaseLettersRegEx,
  upperCaseLettersRegEx,
  numericsRegEx,
} from 'src/app/sample-data/sample-data';

@Injectable({
  providedIn: 'root',
})
export class PasswordValidationService {
  constructor() {}

  validatePassword(password: string) {
    const passwordHasUpperCase = upperCaseLettersRegEx.test(password);

    const passwordHasLowerCase = lowerCaseLettersRegEx.test(password);

    const passwordHasNumerics = numericsRegEx.test(password);

    const passwordHasSpecialCharacters = specialCharactersRegEx.test(password);

    const requiredPasswordValuesAreSatisfied =
      passwordHasUpperCase &&
      passwordHasLowerCase &&
      passwordHasNumerics &&
      passwordHasSpecialCharacters;

    return requiredPasswordValuesAreSatisfied;
  }

  validatePasswordLength(password: string) {
    const passwordLenghtIsBiggerThanEight = password.length > 8;

    return passwordLenghtIsBiggerThanEight;
  }
}

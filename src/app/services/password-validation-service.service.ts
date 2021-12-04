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

  validatePassword(password: string) {}

  validatePasswordLength(password: string) {}
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { InputFormComponent } from './input-form/input-form.component';
import { InputValidatorDirective } from './custom-form-validators/input-validator.directive';
import { PasswordValidatorDirective } from './custom-form-validators/password-validator.directive';
import { PasswordConfirmationValidatorDirective } from './custom-form-validators/password-confirmation-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    InputValidatorDirective,
    PasswordValidatorDirective,
    PasswordConfirmationValidatorDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    InputValidatorDirective,
    PasswordValidatorDirective,
    PasswordConfirmationValidatorDirective,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

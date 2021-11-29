import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputValidatorDirective } from 'src/app/custom-form/input-validator.directive';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css'],
})
export class InputFormComponent implements OnInit {
  nameForm: FormGroup | any;

  constructor(
    public fb: FormBuilder,
    private inputValidatorDirective: InputValidatorDirective
  ) {}

  ngOnInit(): void {
    this.nameForm = this.fb.group({
      name: [
        '',
        Validators.compose([
          Validators.required,
          this.inputValidatorDirective.validate,
        ]),
      ],
      lastName: [
        '',
        Validators.compose([
          Validators.required,
          this.inputValidatorDirective.validate,
        ]),
      ],
    });
  }

  onSubmit() {}
}

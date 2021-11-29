import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css'],
})
export class InputFormComponent implements OnInit {
  nameForm: FormGroup | any;

  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {
    this.nameForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
    });
  }

  onSubmit() {}
}

import {Component, inject} from '@angular/core';
import {NonNullableFormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormField, MatInput} from "@angular/material/input";
import {DecimalValidatorDirective} from "../../directives/decimal-validator.directive";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInput,
    MatFormField,
    DecimalValidatorDirective
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.less'
})
export class Login {

  fb = inject(NonNullableFormBuilder);
  form = this.fb.group({
    email: this.fb.control('', {validators: [Validators.required, Validators.email]}),
    password: this.fb.control('', {validators: [Validators.required, Validators.maxLength(6)]})
  });

  submit() {
    console.log(this.form.getRawValue());
  }
}

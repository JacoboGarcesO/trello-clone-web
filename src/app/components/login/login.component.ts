import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private formBuilder = inject(FormBuilder);

  // constructor(private formBuilder: FormBuilder) { }

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
  })

  submit() {    
    if (!this.loginForm.valid) { return; }
    console.log(this.loginForm.getRawValue());
  }
}

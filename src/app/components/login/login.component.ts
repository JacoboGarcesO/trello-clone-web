import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { delay, map, of } from 'rxjs';
import { State } from '../state/state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private formBuilder = inject(FormBuilder);

  public price = 20000;

  constructor(public state: State) {
    const obs = of(1, 2, 3, 4).pipe(
      delay(10000),
      map(value => value * 2)
    );

    obs.subscribe(value => console.log(value));
  }

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
  })

  submit() {    
    if (!this.loginForm.valid) { return; }
    this.state.userEmail = this.loginForm.getRawValue().email;
    console.log(this.loginForm.getRawValue());
  }
}

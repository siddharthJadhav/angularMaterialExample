import { Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
  addressForm = this.fb.group({
    username: [null, [Validators.required, Validators.minLength(3)]],
    password: [null, Validators.required]
  });

  constructor(private fb: FormBuilder) {}

  login() {
    console.log('click on login')
    alert('Thanks!');
  }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../api/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  errorMessage?: string;

  constructor(
    private auth: AuthService,
    private router: Router,
  ) { }

  login(): void {
    this.errorMessage = undefined;
    this.auth.login(this.loginForm.value).subscribe({
      next: () => {
        this.router.navigateByUrl('/dashboard');
      },
      error: err => {
        this.errorMessage = 'Incorrect email or password.';
      },
    });
  }
}

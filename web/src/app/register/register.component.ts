import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../api/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required ]),
    password: new FormControl('', [Validators.required, ]),
    password2: new FormControl('', [Validators.required, ]),
  });

  errorMessage?: string;

  constructor(
    private auth: AuthService,
    private router: Router,
  ) { }

  register(): void {
    this.errorMessage = undefined;
    this.auth.register(this.registerForm.value).subscribe({
      next: () => {
        this.router.navigateByUrl('/dashboard');
      },
      error: err => {
        this.errorMessage = 'Failed to register';
        console.log(err.error);
        for (let field in err.error) {
          this.registerForm.get(field)?.setErrors(
            (err.error[field] as string[]).reduce((acc, val) => ({
              ...acc,
              [val]: true,
            }), {}),
          );
        }
      },
    });
  }
}

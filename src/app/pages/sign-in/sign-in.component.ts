import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SigninService } from '../../services/signin.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  signInForm: FormGroup;
  showError: boolean = false;
  errorMessage: string = '';
  @Output() userLoggedIn = new EventEmitter<void>();

  constructor(
    private fb: FormBuilder,
    private signinService: SigninService,
    private router: Router,
    private authService: AuthService
  ) {
    this.signInForm = this.fb.group({
      userEmail: ['', [Validators.required, Validators.email]],
      userPassword: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit(): void {
    if (this.signInForm.valid) {
      this.signinService.login(this.signInForm.value).subscribe(
        response => {
          if (response.success) {
            this.authService.login(response); // Cache user data using AuthService
            this.userLoggedIn.emit(); // Emit event
            // Redirect based on userRole
            if (response.userRole === 'user') {
              this.router.navigate(['/']);
            } else if (response.userRole === 'admin') {
              this.router.navigate(['/admin-dashboard']);
            } else {
              // Handle other roles or scenarios
              this.router.navigate(['/']);
            }
          } else {
            this.errorMessage = response.errorMessage;
            this.showError = true;
            setTimeout(() => this.showError = false, 4000);
          }
        },
        error => {
          console.error('Error logging in user', error);
          this.errorMessage = 'An error occurred. Please try again.';
          this.showError = true;
          setTimeout(() => this.showError = false, 4000);
        }
      );
    }
  }
}

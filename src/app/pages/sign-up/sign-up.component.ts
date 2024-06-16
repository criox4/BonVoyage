import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupService } from '../../services/signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signUpForm: FormGroup;
  showError: boolean = false;
  errorMessage: string = '';
  @Output() userLoggedIn = new EventEmitter<void>();

  constructor(private fb: FormBuilder, private signupService: SignupService, private router: Router) {
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      userEmail: ['', [Validators.required, Validators.email]],
      userPhone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      userPassword: ['', [Validators.required, Validators.minLength(8)]],
      userAddress: ['', Validators.required]
    });
  }

  generateUsername(name: string): string {
    const randomNum = Math.floor(100 + Math.random() * 900);
    return name.toLowerCase().replace(/\s+/g, '_') + '_' + randomNum;
  }

  onSubmit(): void {
    if (this.signUpForm.valid) {
      const formValue = this.signUpForm.value;
      const user = {
        ...formValue,
        userName: this.generateUsername(formValue.name),
        userRole: 'user'
      };

      this.signupService.register(user).subscribe(
        response => {
          if (response.success) {
            this.signupService.cacheUserData(response);
            this.userLoggedIn.emit(); // Emit event
            this.router.navigate(['/']);
          } else {
            this.errorMessage = response.errorMessage;
            this.showError = true;
            setTimeout(() => this.showError = false, 4000);
          }
        },
        error => {
          console.error('Error registering user', error);
          this.errorMessage = 'An error occurred. Please try again.';
          this.showError = true;
          setTimeout(() => this.showError = false, 4000);
        }
      );
    }
  }
}

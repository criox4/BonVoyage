import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupService } from '../../services/signup.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder, private signupService: SignupService) {
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
          console.log('User registered successfully', response);
        },
        error => {
          console.error('Error registering user', error);
        }
      );
    }
  }
}

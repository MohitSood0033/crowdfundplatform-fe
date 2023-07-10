import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  errorMessage: any;
  isSignUpFailed: boolean =false;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  registerUser() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.authService
      .register(
        this.registerForm.get('name')?.value,
        this.registerForm.get('email')?.value,
        this.registerForm.get('phone')?.value,
        this.registerForm.get('password')?.value,
      )
      .subscribe({
        next: (data) => {
          this.router.navigate(['login']);
        },error: err => {
          console.log(err.error.message);
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true
        }
      });
  }

  onErrorClose(){
    this.isSignUpFailed = false
  }
}

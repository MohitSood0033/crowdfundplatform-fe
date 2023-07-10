import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
  submitted = false;
  errorMessage: any;
  isSignInFailed: boolean =false;

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
    this.loginForm = this.fb.group({
      phone: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  loginUser() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.authService
      .login(
        this.loginForm.get('phone')?.value,
        this.loginForm.get('password')?.value
      )
      .subscribe({
        next: (data: any) => {
          localStorage.setItem('token', data.token);
          this.router.navigate(['dashboard']);
        },error: (err: any) => {
          console.log(err.error.message);
          this.errorMessage = err.error.message;
          this.isSignInFailed = true
        }
      });
  }

  onErrorClose(){
    this.isSignInFailed = false
  }
}


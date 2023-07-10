import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-verify-user',
  templateUrl: './verify-user.component.html',
  styleUrls: ['./verify-user.component.scss']
})
export class VerifyUserComponent {
  verifyForm!: FormGroup;
  submitted = false;
  errorMessage: any;
  isVerifyFailed: boolean =false;

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
    this.verifyForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', Validators.required],
    });
  }

  get f() {
    return this.verifyForm.controls;
  }

  verifyUser() {
    this.submitted = true;
    if (this.verifyForm.invalid) {
      return;
    }
    this.router.navigate(['dashboard'])
    // this.authService
    //   .verify(
    //     this.verifyForm.get('email')?.value,
    //     this.verifyForm.get('mobile')?.value
    //   )
    //   .subscribe({
    //     next: (data: any) => {
    //       console.log("Registration successful",data);
    //       this.router.navigate(['verify']);
    //     },error: (err: any) => {
    //       console.log(err.error.message);
    //       this.errorMessage = err.error.message;
    //       this.isVerifyFailed = true
    //     }
    //   });
  }

  onErrorClose(){
    this.isVerifyFailed = false
  }
}

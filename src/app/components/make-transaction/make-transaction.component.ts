import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-make-transaction',
  templateUrl: './make-transaction.component.html',
  styleUrls: ['./make-transaction.component.scss'],
})
export class MakeTransactionComponent implements OnInit {
  makeTransForm!: FormGroup;
  submitted = false;
  errorMessage: any;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.makeTransForm = this.fb.group({
      campaignId: [''],
      amount: [''],
    });
  }

  makeTransaction() {
    this.submitted = true;
    if (this.makeTransForm.invalid) {
      return;
    }
    this.authService
      .makeTransaction(
        this.makeTransForm.get('campaignId')?.value,
        this.makeTransForm.get('amount')?.value
      )
      .subscribe({
        next: (data: any) => {
          this.router.navigate(['dashboard']);
        },
        error: (err: any) => {
          this.errorMessage = err.error.message;
        },
      });
  }
}

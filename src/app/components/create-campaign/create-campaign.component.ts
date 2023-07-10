import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.scss'],
})
export class CreateCampaignComponent implements OnInit {
  campaignForm!: FormGroup;
  submitted = false;
  errorMessage: any;
  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.createCampaign();
  }
  createCampaign() {
    this.campaignForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      targetAmount: ['', Validators.required],
    });
  }

  get f() {
    return this.campaignForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.submitted = true;
    if (this.campaignForm.invalid) {
      return;
    }
    this.authService
      .createCampaign(
        this.campaignForm.get('title')?.value,
        this.campaignForm.get('description')?.value,
        this.campaignForm.get('targetAmount')?.value,
      )
      .subscribe({
        next: (data: any) => {
          this.router.navigate(['dashboard']);
        },
        error: (err: any) => {
          console.log(err.error.message);
          this.errorMessage = err.error.message;
        },
      });
  }
}

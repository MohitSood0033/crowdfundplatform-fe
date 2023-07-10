import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  editForm!: FormGroup;
  data: any
  result: any;
  submitted!: boolean;

  constructor(private authService: AuthService, public fb: FormBuilder) { }

  ngOnInit(): void {
    this.getuserprofile();
    this.editForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['',[Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],
      ],
    });
  }

  getuserprofile() {
    this.submitted=true
    this.authService.getUsersById().subscribe((result: any) => {
      if (result) {
        this.data = result;
      } else {
        console.log('error');
      }
    });
  }

  updateuser() {
  }
}

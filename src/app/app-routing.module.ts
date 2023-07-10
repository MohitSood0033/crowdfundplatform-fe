import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { CreateCampaignComponent } from './components/create-campaign/create-campaign.component';
import { VerifyUserComponent } from './components/verify-user/verify-user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CampaignListComponent } from './components/campaign-list/campaign-list.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoginGuard } from './guard/login.guard';
import { LoginComponent } from './components/login/login.component';
import { MakeTransactionComponent } from './components/make-transaction/make-transaction.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AuthenticationGuard } from './guard/authentication.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'create-campaign',
    component: CreateCampaignComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'verify',
    component: VerifyUserComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'campaign-list',
    component: CampaignListComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'make-transaction',
    component: MakeTransactionComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'user-profile',
    component: UserProfileComponent,
    canActivate: [AuthenticationGuard]
  },
  { path: 'error-404', component: ErrorPageComponent },
  { path: '**', redirectTo: 'error-404', pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

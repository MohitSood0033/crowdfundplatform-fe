import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { CreateCampaignComponent } from './components/create-campaign/create-campaign.component';
import { CampaignListComponent } from './components/campaign-list/campaign-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VerifyUserComponent } from './components/verify-user/verify-user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { HeaderComponent } from './layouts/header/header.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoginComponent } from './components/login/login.component';
import { MakeTransactionComponent } from './components/make-transaction/make-transaction.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    CreateCampaignComponent,
    CampaignListComponent,
    VerifyUserComponent,
    DashboardComponent,
    SidebarComponent,
    HeaderComponent,
    ErrorPageComponent,
    LoginComponent,
    MakeTransactionComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

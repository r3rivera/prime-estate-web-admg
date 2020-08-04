import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InputTextModule } from 'primeng/inputtext';
import { LoginComponent } from './_components/commons/login/login.component';
import { ContactusComponent } from './_components/commons/contactus/contactus.component';
import { SignupComponent } from './_components/commons/signup/signup.component';
import { DashboardComponent } from './_components/dashboard/dashboard.component'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LandingComponent } from './_components/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContactusComponent,
    SignupComponent,
    DashboardComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppMaterialModule } from './_modules/material.module';
import { DashboardComponent, SideNavComponent, ProfileMenuComponent, OverviewComponent } from './_components/dashboard';
import { LoginComponent, ContactusComponent, SignupComponent, AlertComponent, UploadComponent, Error404Component, SliderComponent } from './_components/common';
import { LandingComponent, NavigationComponent, HeroComponent, CatalogsComponent, TestimonialsComponent } from './_components/landing';
import { ManageUsersComponent } from './_components/dashboard/manage-users/manage-users.component';

import { JwtokenhandlerInterceptor, ErrorhandlerInterceptor } from './_interceptors';
import { RealestateComponent,AddRealestateComponent,EditRealestateComponent } from './_components/dashboard/realestate';
import { PaymentComponent, CheckoutComponent } from './_components/payment';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContactusComponent,
    SignupComponent,
    DashboardComponent,
    LandingComponent,
    RealestateComponent,
    ProfileMenuComponent,
    OverviewComponent,
    AddRealestateComponent,
    AlertComponent,
    HeroComponent,
    CatalogsComponent,
    TestimonialsComponent,
    NavigationComponent,
    ManageUsersComponent,
    SideNavComponent,
    UploadComponent,
    EditRealestateComponent,
    Error404Component,
    SliderComponent,
    PaymentComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AppMaterialModule
  ],
  providers: [
    { provide : HTTP_INTERCEPTORS, useClass: JwtokenhandlerInterceptor, multi: true },
    { provide : HTTP_INTERCEPTORS, useClass: ErrorhandlerInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

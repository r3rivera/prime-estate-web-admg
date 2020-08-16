import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppMaterialModule } from './_modules/material.module';
import { DashboardComponent, SideNavComponent, ProfileMenuComponent, OverviewComponent, RealestateComponent } from './_components/dashboard';
import { LoginComponent, ContactusComponent, SignupComponent, AlertComponent } from './_components/common';
import { AddRealestateComponent } from './_components/dashboard/realestate/add-realestate/add-realestate.component';
import { LandingComponent, NavigationComponent, HeroComponent, CatalogsComponent, TestimonialsComponent } from './_components/landing';
import { ManageUsersComponent } from './_components/dashboard/manage-users/manage-users.component';





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
    SideNavComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

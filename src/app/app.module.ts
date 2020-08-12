import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PrimeNgModule } from './_modules/primeng.module';
import { DashboardComponent, ProfileMenuComponent, OverviewComponent, RealestateComponent } from './_components/dashboard';
import { LoginComponent, ContactusComponent, SignupComponent, AlertComponent } from './_components/common';
import { LandingComponent } from './_components/landing';
import { AddRealestateComponent } from './_components/dashboard/realestate/add-realestate/add-realestate.component';
import { HeroComponent } from './_components/landing/hero/hero.component';
import { CatalogsComponent } from './_components/landing/catalogs/catalogs.component';
import { TestimonialsComponent } from './_components/landing/testimonials/testimonials.component';



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
    TestimonialsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    PrimeNgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

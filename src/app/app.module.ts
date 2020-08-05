import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PrimeNgModule } from './_modules/primeng.module';
import { DashboardComponent, RealestateComponent, ProfileMenuComponent} from './_components/dashboard';
import { LoginComponent, ContactusComponent, SignupComponent } from './_components/commons';
import { LandingComponent } from './_components/landing';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContactusComponent,
    SignupComponent,
    DashboardComponent,
    LandingComponent,
    RealestateComponent,
    ProfileMenuComponent
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

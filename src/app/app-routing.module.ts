import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent, SignupComponent, ContactusComponent } from './_components/common';

import { DashboardComponent } from './_components/dashboard/dashboard.component';
import { LandingComponent } from './_components/landing/landing.component';
import { OverviewComponent, RealestateComponent, AddRealestateComponent } from './_components/dashboard';
import { AuthzGuard } from './_services/security/authz.guard';


const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: '', component: OverviewComponent },
    { path: 'real-estates', component: RealestateComponent },
    { path: 'create-estates', component: AddRealestateComponent },
  ], canActivate: [ AuthzGuard ], data:{roles:["4SSN-APP-PROPERTY-MANAGER","4SSN-APP-SUPER-ADMIN"]} },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'contactus', component: ContactusComponent }

];



@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

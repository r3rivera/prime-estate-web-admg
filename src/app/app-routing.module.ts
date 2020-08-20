import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent, SignupComponent, ContactusComponent, Error404Component } from './_components/common';

import { DashboardComponent } from './_components/dashboard/dashboard.component';
import { LandingComponent } from './_components/landing/landing.component';
import { OverviewComponent } from './_components/dashboard';
import { AuthzGuard } from './_services/security/authz.guard';
import { ManageUsersComponent } from './_components/dashboard/manage-users';
import { RealestateComponent, AddRealestateComponent } from './_components/dashboard/realestate';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: 'real-estates', component: RealestateComponent },
    { path: 'create-estates', component: AddRealestateComponent },
    { path: 'manage-users', component: ManageUsersComponent },
    { path: '', component: OverviewComponent },
  ], canActivate: [ AuthzGuard ], data:{roles:["4SSN-APP-PROPERTY-MANAGER","4SSN-APP-SUPER-ADMIN",,"4SSN-APP-PROP-OWNER"]} },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: '', component: LandingComponent },
  { path: '**', component: Error404Component },
];



@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../user/login/login.component';
import { HomeComponent } from '../../components/home/home.component';
import { LoginWardService } from '../user/services/auth/login-ward.service';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', component: HomeComponent, canActivate: [LoginWardService] }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  exports: [ RouterModule],
  declarations: []
})
export class RoutingModule { }

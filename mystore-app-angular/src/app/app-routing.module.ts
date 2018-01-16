import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home.component';
import { LoginComponent } from './login.component';
import { RegistrationComponent } from './registration/registration.component';

const appRoutes: Routes = [
  {path: 'index', component: HomeComponent},
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistrationComponent},
  /*{ path: '**', component: PageNotFoundComponent },*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}

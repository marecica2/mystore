
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import { AuthGuard } from './../authentication/auth.guard';

import {AdminComponent} from './admin.component';
import {AdminRoutingModule} from './admin-routing.module';
import {AdminDashboardComponent} from './admin.dashboard.component';
import {UsersComponent} from './users/users.component';
import {UserService} from './users/user.service';
import {UserComponent} from './users/user.component';
import {ProductsComponent} from './products/products.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    UsersComponent,
    UserComponent,
    ProductsComponent,
  ],
  providers: [
    UserService,
    AuthGuard,
  ]
})
export class AdminModule {
}

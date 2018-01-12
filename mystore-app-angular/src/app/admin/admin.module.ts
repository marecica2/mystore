import { AuthInterceptor } from './../auth.interceptor';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import { AuthGuard } from '../auth.guard';

import {AdminComponent} from './admin.component';
import {UsersComponent} from './users/users.component';
import {AdminRoutingModule} from './admin-routing.module';
import {ProductsComponent} from './products/products.component';
import {UserService} from './users/user.service';
import {UserComponent} from './users/user.component';
import {AdminDashboardComponent} from './admin.dashboard.component';


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

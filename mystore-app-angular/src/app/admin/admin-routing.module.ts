import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UsersComponent} from './users/users.component';
import {UserComponent} from './users/user.component';
import {AdminComponent} from './admin.component';
import {ProductsComponent} from './products/products.component';
import {AdminDashboardComponent} from './admin.dashboard.component';
import { AuthGuard } from '../auth.guard';

const adminRoutes: Routes = [
  {
    path: 'admin', component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: AdminDashboardComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'users/:id',
        component: UserComponent,
      },
      {
        path: 'products',
        component: ProductsComponent,
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {
}

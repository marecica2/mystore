import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AuthenticationService } from './authentication.service';
import { AuthGuard } from './auth.guard';
import { AuthInterceptor } from './auth.interceptor';

export class Account {
  public username: string;
  public password: string;
  public firstName: string;
  public lastName: string;
  public email: string;
}

@NgModule({
  declarations: [
  ],
  imports: [
    HttpClientModule,
    CommonModule,
  ],
  providers: [],
  exports: []
})
export class AuthenticationModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthenticationModule,
      providers: [
        AuthGuard,
        AuthenticationService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true
        }
      ]
    };
  }
}


import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private auth: AuthenticationService, 
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const customReq = request.clone({
            setHeaders: {
                'X-Requested-With': 'XMLHttpRequest',
                Authorization: `Bearer ${this.auth.token}`
            }
        });

        return next.handle(customReq);
    }
}
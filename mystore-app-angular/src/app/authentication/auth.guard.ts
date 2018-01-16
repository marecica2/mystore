import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { Location } from '@angular/common';

 
@Injectable()
export class AuthGuard implements CanActivate {
 
    constructor(private router: Router, private currentRoute: Location ,private auth: AuthenticationService) { }
 
    canActivate(): boolean {
        if(!this.auth.isLogged()){
            return false;
        } else if(!this.currentRoute.path().includes("admin")) {
            return true;
        } else if(!this.auth.isInRole(this.auth.ROLE_ADMIN)) {
            this.router.navigate(['/login']);
            return false;
        } else {
            return true;
        }
    }
}
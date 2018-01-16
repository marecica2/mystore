import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { Headers, Response, RequestOptions, Http } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { Account } from './authentication.module';

@Injectable()
export class AuthenticationService {

    ROLE_ADMIN = "ROLE_ADMIN";
    public static ROLE_USER = "ROLE_USER";
    public token: string = null;

    constructor(private http: Http, private router: Router) {
        if (Cookie.check('access_token')) {
            this.token = Cookie.get('access_token');
            console.log(this.parseToken(this.token));
        }
    }

    public isLogged(): boolean {
        if (Cookie.check('access_token'))
            return true;
        else
            return false;
    }

    public login(username: string, password: string): Observable<boolean> {
        let params = new URLSearchParams();
        params.append('username', username);
        params.append('password', password);
        params.append('grant_type', 'password');

        let headers = new Headers({
            'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
            'X-Requested-With': 'XMLHttpRequest',
            'Authorization': 'Basic ' + btoa('trusted-app' + ":" + 'secret')
        });
        let options = new RequestOptions({ headers: headers });
        console.log(params.toString());
        this.http.post('/api/oauth/token', params.toString(), options)
            .map(res => res.json())
            .subscribe(
            data => {
                this.saveToken(data);
            },
            err => {
                alert('Invalid Credentials');
            });

        return Observable.of(true);
    }

    public register(account: Account): Observable<any> {
        let headers = new Headers({ 'Authorization': 'Basic ' + btoa('register-app' + ":" + 'secret') });
        let options = new RequestOptions({ headers: headers });
        let o: Observable<any> = this.http.post('/api/oauth/token?grant_type=client_credentials', {}, options)
            .map((result: any) => result.json())
            .mergeMap((data: any) => {
                console.log("registration token ", data);
                let headers = new Headers({ 'Authorization': 'Bearer ' + data["access_token"] });
                let options = new RequestOptions({ headers: headers });
                return this.http.post('/api/api/account/register', account, options)
                    .map((res: any) => res.json());
            })
            .do(data => {
                console.log("registration success in service", data);
            })
        return o;
    }

    private saveToken(token) {
        var expireDate = new Date().getTime() + (1000 * token.expires_in);
        Cookie.set("access_token", token.access_token, expireDate);
        console.log('Obtained Access token');
        this.router.navigate(['/']);
        this.token = token.access_token;
    }

    public getResource(resourceUrl): Observable<any> {
        var headers = new Headers({ 'Content-type': 'application/x-www-form-urlencoded; charset=utf-8', 'Authorization': 'Bearer ' + Cookie.get('access_token') });
        var options = new RequestOptions({ headers: headers });
        return this.http.get(resourceUrl, options)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    public checkCredentials() {
        if (!Cookie.check('access_token')) {
            this.router.navigate(['/login']);
        }
    }

    public logout() {
        Cookie.delete('access_token');
        this.router.navigate(['/login']);
    }

    public getLoggedUser(): String {
        if (this.token) {
            return this.parseToken(this.token)['user_name']
        } else {
            null;
        }
    }

    public isInRole(role: String): Boolean {
        if (this.token) {
            return this.parseToken(this.token).authorities.indexOf(role) !== -1 ? true : false;
        } else {
            return false;
        }
    }

    private parseToken(token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    };
}
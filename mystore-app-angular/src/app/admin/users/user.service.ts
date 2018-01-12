import { Injectable } from '@angular/core';
import { Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { User } from './user';

@Injectable()
export class UserService {
  private static apiUrl = '/user-api/users';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  private static handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  constructor(
    private http: HttpClient) {
  }

  getUsers(): Promise<User[]> {
    return this.http.get(UserService.apiUrl)
      .toPromise()
      .then(response => response as User[])
      .catch(UserService.handleError);
  }

  getUser(id: String): Promise<User> {
    const url = `${UserService.apiUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response as User)
      .catch(UserService.handleError);
  }

  updateUser(user: User): Promise<User> {
    const url = `${UserService.apiUrl}/${user.id}`;
    return this.http.put(url, user)
      .toPromise()
      .then(response => response as User)
      .catch(UserService.handleError);
  }

  createUser(user: User): Promise<User> {
    const url = `${UserService.apiUrl}`;
    return this.http.post(url, user)
      .toPromise()
      .then(response => response as User)
      .catch(UserService.handleError);
  }

  deleteUser(user: User): Promise<Response> {
    const url = `${UserService.apiUrl}/${user.id}`;
    return this.http.delete<Response>(url).toPromise<Response>();
  }
}

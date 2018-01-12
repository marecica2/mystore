import { Component } from '@angular/core';

import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isLoggedIn = false;

  constructor(private auth: AuthenticationService) {
    this.auth = auth;
  }

  isLogged(): boolean {
    return this.auth.isLogged();
  }

  logout() {
    this.auth.logout();
  }
}

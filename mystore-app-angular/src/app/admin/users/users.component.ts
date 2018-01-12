import {Component, OnInit} from '@angular/core';

import {UserService} from './user.service';
import {User} from './user';

@Component({
  selector: 'app-admin-users-component',
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {
  public users: User[];
  public selectedUser: User;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().then(users => this.users = users);
  }

  block(user: User): void {
    console.log('user was blocked', user);
  }

  delete(user: User): void {
    this.userService.deleteUser(user).then(response => this.getUsers());
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }
}

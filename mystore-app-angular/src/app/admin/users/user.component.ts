import { UserService } from './user.service';
import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { User } from './user';

@Component({
  selector: 'app-user-component',
  templateUrl: 'user.component.html'
})
export class UserComponent implements OnInit {
  user: User = new User();
  id: string;
  private sub: any;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number

      if (this.id == "new") {
        console.log("creating new", this.user);
      } else {
        this.route.paramMap
          .switchMap((params: ParamMap) => this.userService.getUser(params.get('id')))
          .subscribe(user => {
            console.log(user);
            this.user = user;
          });
      }
    });
  }

  save(): void {
    if (this.user.id) {
      this.userService.updateUser(this.user)
        .then(() => console.log('updated', this.user));
    } else {
      this.userService.createUser(this.user)
        .then((user) => {
          console.log('created', this.user);
          this.user = user;
          this.router.navigateByUrl('/admin/users');
        });
    }
  }
}

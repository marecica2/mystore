import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { Account } from '../authentication/authentication.module';

@Component({
  selector: 'app-register',
  templateUrl: './registration.component.html',
})
export class RegistrationComponent implements OnInit {

  private account: Account = new Account();

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
   }

  register(acc: Account) {
    this.auth.register(acc).subscribe((data:any)=>{
      console.log('registration success');
    });
  }

}

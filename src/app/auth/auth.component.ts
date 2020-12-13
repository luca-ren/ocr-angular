import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authStatus ?: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.authStatus = this.authService.isAuth;
  }

  // tslint:disable-next-line:typedef
  onSignIn() {
    this.authService.signIn().then(
      () => {
        console.log('Sign in successful!');
        this.authStatus = this.authService.isAuth;
        this.router.navigate(['appareils']);
      }
    );
  }

  // tslint:disable-next-line:typedef
  onSignOut() {
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }

}

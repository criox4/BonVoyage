import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  username: string = '';
  userRole: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.loggedIn$.subscribe(status => {
      this.isLoggedIn = status;
      console.log('isLoggedIn:', this.isLoggedIn);
    });

    this.authService.userName$.subscribe(name => {
      this.username = name;
      console.log('username:', this.username);
    });

    this.authService.userRole$.subscribe(role => {
      this.userRole = role;
      console.log('userRole:', this.userRole);
    });

    this.authService.setInitialAuthState();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}

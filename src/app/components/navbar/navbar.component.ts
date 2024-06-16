import { Component, OnInit } from '@angular/core';
import { SignupService } from '../../services/signup.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  username: string = '';

  constructor(private signupService: SignupService) {}

  ngOnInit(): void {
    const user = this.signupService.getUserData();
    this.isLoggedIn = !!user;
    this.username = user ? user.name : '';
  }

  logout(): void {
    this.signupService.clearUserData();
    this.isLoggedIn = false;
    this.username = '';
  }
}

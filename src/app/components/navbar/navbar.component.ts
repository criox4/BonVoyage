import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  username: string = '';

  ngOnInit(): void {
    // Simulating user login status and username
    this.isLoggedIn = this.checkLoginStatus();
    this.username = this.getUsername();
  }

  checkLoginStatus(): boolean {
    // Implement your login status check logic here
    return true; // Change this to true to simulate a logged-in user
  }

  getUsername(): string {
    // Implement your logic to get the username here
    return 'Ashu'; // Simulated username
  }

  logout(): void {
    // Implement your logout logic here
    this.isLoggedIn = false;
    this.username = '';
  }
}

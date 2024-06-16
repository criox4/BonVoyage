import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private userName = new BehaviorSubject<string>('');

  loggedIn$ = this.loggedIn.asObservable();
  userName$ = this.userName.asObservable();

  login(userData: any): void {
    this.loggedIn.next(true);
    this.userName.next(userData.name);
  }

  logout(): void {
    this.loggedIn.next(false);
    this.userName.next('');
    localStorage.removeItem('userData');
  }

  setInitialAuthState(): void {
    const userData = localStorage.getItem('userData');
    if (userData) {
      const user = JSON.parse(userData);
      this.login(user);
    }
  }
}

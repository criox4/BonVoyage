import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private userName = new BehaviorSubject<string>('');
  private userRole = new BehaviorSubject<string>('');

  loggedIn$ = this.loggedIn.asObservable();
  userName$ = this.userName.asObservable();
  userRole$ = this.userRole.asObservable();
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.setInitialAuthState();
  }

  login(userData: any): void {
    if (this.isBrowser) {
      localStorage.setItem('user', JSON.stringify(userData));
    }
    this.loggedIn.next(true);
    this.userName.next(userData.name);
    this.userRole.next(userData.role); 
  }

  logout(): void {
    if (this.isBrowser) {
      localStorage.removeItem('user');
    }
    this.loggedIn.next(false);
    this.userName.next('');
    this.userRole.next('');
  }

  setInitialAuthState(): void {
    if (this.isBrowser) {
      const userData = localStorage.getItem('user');
      if (userData) {
        const user = JSON.parse(userData);
        this.login(user);
      }
    }
  }

  getUserId(): string | null {
    if (this.isBrowser) {
      const userData = localStorage.getItem('user');
      if (userData) {
        const user = JSON.parse(userData);
        return user.userId; 
      }
    }
    return null;
  }

  getUserName(): string | null {
    if (this.isBrowser) {
      const userData = localStorage.getItem('user');
      if (userData) {
        const user = JSON.parse(userData);
        return user.name; 
      }
    }
    return null;
  }

  getUserRole(): string | null {
    if (this.isBrowser) {
      const userData = localStorage.getItem('user');
      if (userData) {
        const user = JSON.parse(userData);
        return user.role; 
      }
    }
    return null;
  }
}

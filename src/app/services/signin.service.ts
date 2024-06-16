import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SigninService {
  private apiUrl = 'http://localhost:8090/api/users/login';

  constructor(private http: HttpClient) {}

  login(credentials: { userEmail: string; userPassword: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, credentials);
  }

  cacheUserData(data: any): void {
    localStorage.setItem('user', JSON.stringify(data));
  }

  getUserData(): any {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  clearUserData(): void {
    localStorage.removeItem('user');
  }
}

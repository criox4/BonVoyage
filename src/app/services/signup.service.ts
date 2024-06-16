import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private apiUrl = 'http://localhost:9191/api/users/register';

  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }
}

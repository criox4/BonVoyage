// src/app/services/admin-dashboard.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService {

  private bookingsCountUrl = 'http://localhost:8095/api/bookings/bookingsCount';
  private packagesCountUrl = 'http://localhost:8080/api/packages/packagesCount';

  constructor(private http: HttpClient) {}

  getBookingsCount(): Observable<number> {
    return this.http.get<number>(this.bookingsCountUrl);
  }

  getPackagesCount(): Observable<number> {
    return this.http.get<number>(this.packagesCountUrl);
  }
}

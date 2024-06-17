import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private apiUrl = 'http://localhost:9191/api/bookings';

  constructor(private http: HttpClient) {}

  createBooking(bookingData: any): Observable<any> {
    console.log("Api HIT");
    return this.http.post<any>(this.apiUrl, bookingData);
  }
}

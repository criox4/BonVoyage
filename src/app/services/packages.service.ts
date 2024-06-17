import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {
  private apiUrl = 'http://localhost:8080/api/packages';
  private wishApiUrl = 'http://localhost:8090/api';

  constructor(private http: HttpClient) {}

  getAllPackages(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  searchPackages(location: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${location}`);
  }

  getPackageDetails(packageId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/onePackage/${packageId}`);
  }

  getPackageItinerary(packageId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/itinerary/${packageId}`);
  }

  addToWishlist(userId: string, wishlistId: string): Observable<any> {
    console.log("API HIT")
    return this.http.post<any>(`${this.wishApiUrl}/users/${userId}/wishlist/${wishlistId}`, {});
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {
  private apiUrl = 'http://localhost:9191/api/packages';

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
}

// src/app/pages/admin-dashboard/admin-dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { AdminDashboardService } from '../../services/admin-dashboard.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  bookingsCount: number = 0;
  packagesCount: number = 0;

  constructor(private adminDashboardService: AdminDashboardService) {}

  ngOnInit(): void {
    this.loadCounts();
  }

  loadCounts(): void {
    this.adminDashboardService.getBookingsCount().subscribe(count => {
      this.bookingsCount = count;
    });

    this.adminDashboardService.getPackagesCount().subscribe(count => {
      this.packagesCount = count;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service';
import { AuthService } from '../../services/auth.service';
import { PackagesService } from '../../services/packages.service';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent implements OnInit {
  bookings: any[] = [];
  packageDetails: any = {};
  isModalOpen: boolean = false;
  selectedBooking: any = null;

  constructor(
    private bookingService: BookingService,
    private authService: AuthService,
    private packagesService: PackagesService
  ) {}

  ngOnInit(): void {
    const userId = this.authService.getUserId();
    if (userId) {
      this.fetchBookings(userId);
    }
  }

  fetchBookings(userId: string): void {
    this.bookingService.getBookings(userId).subscribe((data: any[]) => {
      this.bookings = data;
      this.bookings.forEach(booking => {
        this.fetchPackageDetails(booking.packageID);
      });
    });
  }

  fetchPackageDetails(packageId: string): void {
    this.packagesService.getPackageDetails(packageId).subscribe((data: any) => {
      this.packageDetails[packageId] = data;
    });
  }

  openUpdateModal(booking: any): void {
    this.selectedBooking = { ...booking };
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  updateBooking(): void {
    this.bookingService.updateBooking(this.selectedBooking).subscribe(updatedBooking => {
      const index = this.bookings.findIndex(b => b.bookingId === updatedBooking.bookingId);
      if (index !== -1) {
        this.bookings[index] = updatedBooking;
      }
      this.closeModal();
    });
  }
}

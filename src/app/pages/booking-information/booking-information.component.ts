import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../../services/booking.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-booking-information',
  templateUrl: './booking-information.component.html',
  styleUrls: ['./booking-information.component.css']
})
export class BookingInformationComponent {
  bookingDate: string = '';
  bookingRooms: number = 1;
  packageDetails: any;
  userId: string | null;

  constructor(private router: Router, private bookingService: BookingService, private authService: AuthService) {
    const navigation = this.router.getCurrentNavigation();
    this.packageDetails = navigation?.extras?.state?.['package'];
    this.userId = this.authService.getUserId();
  }

  bookPackage(): void {
    if (!this.userId) {
      console.error('User ID not found');
      return;
    }

    const bookingData = {
      userId: this.userId,
      packageID: this.packageDetails.packageID,
      bookingDate: this.bookingDate,
      bookingPerson: this.authService.getUserName(), // Use getUserName method
      bookingRooms: this.bookingRooms
    };
    
    this.bookingService.createBooking(bookingData).subscribe(
      
      (response) => {
        this.router.navigate(['/checkout-confirmation'], { state: { booking: response[0] } });
      },
      error => {
        console.error('Error creating booking:', error);
      }
    );
  }
}

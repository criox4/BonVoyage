import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PackagesService } from '../../services/packages.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-individual-package',
  templateUrl: './individual-package.component.html',
  styleUrls: ['./individual-package.component.css']
})
export class IndividualPackageComponent implements OnInit {
  package: any;
  itinerary: any[] = [];
  isLoggedIn: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private packagesService: PackagesService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const packageId = this.route.snapshot.paramMap.get('id') || '';
  
    this.packagesService.getPackageDetails(packageId).subscribe(data => {
      this.package = data;
    });
  
    this.packagesService.getPackageItinerary(packageId).subscribe(data => {
      this.itinerary = data;
    });
  
    this.authService.loggedIn$.subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
    });
  }  

  bookPackage(): void {
    if (!this.isLoggedIn) {
      alert('Not Logged in, Please Login First to book');
      return;
    }
    this.router.navigate(['/booking-information', this.package.packageID]);
  }

  addToWishlist(): void {
    const userId = this.authService.getUserId();
    if (!userId) {
      alert('Not Logged in, Please Login First to add to wishlist');
      return;
    }
    this.packagesService.addToWishlist(userId, this.package.packageID).subscribe(
      () => alert('Wishlisted successfully'),
      error => console.error('Error adding to wishlist', error)
    );
  }
}

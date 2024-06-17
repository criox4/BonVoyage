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
    private router: Router,
    private packagesService: PackagesService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadPackageDetails();
    this.loadItinerary();
    this.authService.loggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  private loadPackageDetails(): void {
    const packageId = this.route.snapshot.paramMap.get('id');
    if (packageId) {
      this.packagesService.getPackageDetails(packageId).subscribe(data => {
        this.package = data;
      }, error => {
        console.error('Error loading package details:', error);
      });
    } else {
      this.router.navigate(['/']);
    }
  }

  private loadItinerary(): void {
    const packageId = this.route.snapshot.paramMap.get('id');
    if (packageId) {
      this.packagesService.getPackageItinerary(packageId).subscribe(data => {
        this.itinerary = data;
      }, error => {
        console.error('Error loading itinerary:', error);
      });
    }
  }

  addToWishlist(): void {
    console.log("Button Clicked");
    const userId = this.authService.getUserId();
    if (userId) {
      this.packagesService.addToWishlist(userId, this.package.packageID).subscribe(
        () => {
          alert('Wishlisted successfully');
        },
        error => {
          console.error('Error adding to wishlist:', error);
        }
      );
    }
  }

  bookPackage(): void {
    if (this.isLoggedIn) {
      this.router.navigate(['/booking-information'], { state: { package: this.package } });
    } else {
      alert('You must be logged in to book a package');
    }
  }
}

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
    const packageId = this.route.snapshot.paramMap.get('id');
    if (packageId) {
      this.packagesService.getPackageDetails(packageId).subscribe(data => {
        this.package = data;
      });

      this.packagesService.getPackageItinerary(packageId).subscribe(data => {
        this.itinerary = data;
      });

      this.authService.loggedIn$.subscribe(isLoggedIn => {
        this.isLoggedIn = isLoggedIn;
      });
    } else {
      this.router.navigate(['/']);
    }
  }

  bookPackage(): void {
    this.router.navigate(['/booking-information'], { state: { package: this.package } });
  }

  addToWishlist(): void {
    const userId = this.authService.getUserId();
    if (userId) {
      this.packagesService.addToWishlist(userId, this.package.packageID).subscribe(() => {
        alert('Wishlisted successfully');
      });
    }
  }
}

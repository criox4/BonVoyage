import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PackagesService } from '../../services/packages.service';

@Component({
  selector: 'app-all-packages',
  templateUrl: './all-packages.component.html',
  styleUrls: ['./all-packages.component.css']
})
export class AllPackagesComponent implements OnInit {
  packages: any[] = [];
  searchLocation: string = '';
  showError: boolean = false;
  errorMessage: string = '';

  constructor(private packagesService: PackagesService, private router: Router) {}

  ngOnInit(): void {
    this.fetchAllPackages();
  }

  fetchAllPackages(): void {
    this.packagesService.getAllPackages().subscribe(
      data => {
        this.packages = data;
      },
      error => {
        this.showError = true;
        this.errorMessage = 'Error fetching packages. Please try again later.';
        setTimeout(() => this.showError = false, 4000);
      }
    );
  }

  onSearch(): void {
    if (this.searchLocation.trim()) {
      this.packagesService.searchPackages(this.searchLocation).subscribe(
        data => {
          this.packages = data;
        },
        error => {
          this.showError = true;
          this.errorMessage = 'Error fetching packages. Please try again later.';
          setTimeout(() => this.showError = false, 4000);
        }
      );
    } else {
      this.fetchAllPackages();
    }
  }

  showDetails(packageId: string): void {
    this.router.navigate(['/individual-package', packageId]);
  }

  getDiscountedPrice(originalPrice: string): string {
    const price = parseFloat(originalPrice.replace('$', '').trim());
    const discountedPrice = (price * 0.8).toFixed(2);
    return `$ ${discountedPrice}`;
  }
}

import { Component, OnInit } from '@angular/core';
import { PackagesService } from '../../services/packages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-packages',
  templateUrl: './all-packages.component.html',
  styleUrls: ['./all-packages.component.css']
})
export class AllPackagesComponent implements OnInit {
  packages: any[] = [];
  searchLocation: string = '';

  constructor(private packagesService: PackagesService, private router: Router) {}

  ngOnInit(): void {
    this.packagesService.getAllPackages().subscribe(data => {
      this.packages = data;
    });
  }

  onSearch(): void {
    if (this.searchLocation.trim()) {
      this.packagesService.searchPackages(this.searchLocation).subscribe(data => {
        this.packages = data;
      });
    } else {
      this.packagesService.getAllPackages().subscribe(data => {
        this.packages = data;
      });
    }
  }
  
    performSearch(): void {
      if (this.searchLocation.trim()) {
        this.packagesService.searchPackages(this.searchLocation).subscribe(data => {
          this.packages = data;
        });
      } else {
        this.packagesService.getAllPackages().subscribe(data => {
          this.packages = data;
        });
      }
    }

  showDetails(packageId: string): void {
    this.router.navigate(['/packages', packageId]);
  }

  getDiscountedPrice(originalPrice: string): string {
    const price = parseFloat(originalPrice.replace('$', '').trim());
    const discountedPrice = (price * 1.2).toFixed(2);
    return `$ ${discountedPrice}`;
  }

  getStarsArray(rating: number): any[] {
    return new Array(Math.floor(rating));
  }
}

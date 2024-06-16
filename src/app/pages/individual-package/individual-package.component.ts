import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PackagesService } from '../../services/packages.service';

@Component({
  selector: 'app-individual-package',
  templateUrl: './individual-package.component.html',
  styleUrls: ['./individual-package.component.css']
})
export class IndividualPackageComponent implements OnInit {
  package: any;
  showError: boolean = false;
  errorMessage: string = '';

  constructor(private route: ActivatedRoute, private packagesService: PackagesService) {}

  ngOnInit(): void {
    const packageId = this.route.snapshot.paramMap.get('packageId');
    if (packageId) {
      this.packagesService.getPackageDetails(packageId).subscribe(
        data => {
          this.package = data;
        },
        error => {
          this.showError = true;
          this.errorMessage = 'Error fetching package details. Please try again later.';
          setTimeout(() => this.showError = false, 4000);
        }
      );
    }
  }

  getDiscountedPrice(originalPrice: string): string {
    const price = parseFloat(originalPrice.replace('$', '').trim());
    const discountedPrice = (price * 0.8).toFixed(2);
    return `$ ${discountedPrice}`;
  }
}

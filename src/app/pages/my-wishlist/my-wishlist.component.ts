import { Component, OnInit } from '@angular/core';
import { PackagesService } from '../../services/packages.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-my-wishlist',
  templateUrl: './my-wishlist.component.html',
  styleUrls: ['./my-wishlist.component.css']
})
export class MyWishlistComponent implements OnInit {
  userId: string | null = null;
  myWishlist: any[] = [];
  packageDetails: { [key: string]: any } = {};
  isModalOpen = false;
  selectedWishlistItem: any;

  constructor(
    private packagesService: PackagesService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.userId = this.authService.getUserId();
    if (this.userId) {
      this.fetchMyWishlist();
    }
  }

  fetchMyWishlist(): void {
    this.packagesService.getWishlist(this.userId!).subscribe((wishlist: any[]) => {
      this.myWishlist = wishlist;
      this.myWishlist.forEach(item => {
        this.fetchPackageDetails(item.wishlistId);
      });
    });
  }

  fetchPackageDetails(packageId: string): void {
    this.packagesService.getPackageDetails(packageId).subscribe((data: any) => {
      this.packageDetails[packageId] = data;
    });
  }

  removeFromWishlist(wishlistId: string): void {
    this.packagesService.removeFromWishlist(this.userId!, wishlistId).subscribe(() => {
      this.fetchMyWishlist();
    });
  }
}

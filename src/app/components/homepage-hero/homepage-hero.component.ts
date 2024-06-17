import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage-hero',
  templateUrl: './homepage-hero.component.html',
  styleUrls: ['./homepage-hero.component.css']
})
export class HomepageHeroComponent {
  searchLocation: string = '';

  constructor(private router: Router) {}

  onSearch(): void {
    if (this.searchLocation.trim()) {
      this.router.navigate(['/all-packages'], { queryParams: { location: this.searchLocation } });
    } else {
      // Handle empty search case, if needed
      console.log('Search location is empty');
    }
  }
}
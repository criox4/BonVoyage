import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-confirmation',
  templateUrl: './checkout-confirmation.component.html',
  styleUrls: ['./checkout-confirmation.component.css']
})
export class CheckoutConfirmationComponent implements OnInit {
  booking: any;
  backgroundUrl: string = 'https://i.ibb.co/ZKBnRtj/ezgif-com-gif-maker-1-1.webp'; 

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.booking = navigation?.extras?.state?.['booking'];
  }

  ngOnInit(): void {
    if (!this.booking) {
      this.router.navigate(['/']);
    }
  }
}

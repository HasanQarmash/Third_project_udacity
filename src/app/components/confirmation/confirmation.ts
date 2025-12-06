import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { OrderInfo } from '../checkout/checkout';

@Component({
  selector: 'app-confirmation',
  imports: [CommonModule, RouterLink],
  templateUrl: './confirmation.html',
  styleUrl: './confirmation.css',
})
export class Confirmation implements OnInit {
  orderInfo: OrderInfo | null = null;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Retrieve order details from session - Custom by Hasan Qarmash
    const orderData = sessionStorage.getItem('orderInfo');

    if (orderData) {
      this.orderInfo = JSON.parse(orderData);
      // Clean up session storage after retrieving order
      sessionStorage.removeItem('orderInfo');
    } else {
      // No order found, return user to homepage
      this.router.navigate(['/']);
    }
  }

  // Navigate back to product catalog - Hasan's method
  goBackToShopping(): void {
    this.router.navigate(['/']);
  }
}

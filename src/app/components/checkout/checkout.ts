import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../../services/cart-service';

export interface OrderInfo {
  fullName: string;
  address: string;
  creditCard: string;
  total: number;
}

@Component({
  selector: 'app-checkout',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout implements OnInit {
  fullName = '';
  address = '';
  creditCard = '';
  total = 0;
  itemCount = 0;

  constructor(
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Initialize order totals from cart service - Hasan's implementation
    this.total = this.cartService.getTotal();
    this.itemCount = this.cartService.getItemCount();

    // Validation: Prevent checkout with empty cart
    if (this.itemCount === 0) {
      alert('🛒 Your shopping cart is empty! Please add items before checkout.');
      this.router.navigate(['/cart']);
    }
  }

  // Form submission handler - Modified by Hasan Qarmash
  onSubmit(): void {
    // Custom validation logic
    if (!this.fullName || this.fullName.trim().length < 3) {
      alert('⚠️ Full name must be at least 3 characters long!');
      return;
    }

    if (!this.address || this.address.trim().length < 5) {
      alert('⚠️ Delivery address must be at least 5 characters!');
      return;
    }

    if (!this.creditCard || this.creditCard.trim().length < 10) {
      alert('⚠️ Credit card number must be at least 10 digits!');
      return;
    }

    // Prepare order information object
    const customerOrder: OrderInfo = {
      fullName: this.fullName,
      address: this.address,
      creditCard: this.creditCard,
      total: this.total
    };

    // Persist order data for confirmation page
    sessionStorage.setItem('orderInfo', JSON.stringify(customerOrder));

    // Empty the shopping cart after successful order
    this.cartService.clearCart();

    // Redirect to order confirmation page
    this.router.navigate(['/confirmation']);
  }
}

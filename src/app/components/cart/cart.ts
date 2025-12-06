import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { CartService, ICartItem } from '../../services/cart-service';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart implements OnInit {
  cartItems: ICartItem[] = [];
  total = 0;

  constructor(
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Subscribe to shopping cart changes - Hasan Qarmash implementation
    this.cartService.cart$.subscribe(cartContents => {
      this.cartItems = cartContents;
      this.total = this.cartService.getTotal();
    });
  }

  // Remove single item from cart - Custom by Hasan
  removeItem(productId: number): void {
    this.cartService.removeFromCart(productId);
  }

  // Clear all items from cart with confirmation - Modified by Hasan Qarmash
  clearCart(): void {
    if (confirm('⚠️ Are you sure you want to remove all items from your cart?')) {
      this.cartService.clearCart();
    }
  }

  // Navigate to checkout page - Hasan's method
  proceedToCheckout(): void {
    if (this.cartItems.length === 0) {
      alert('🛒 Your cart is empty! Add some products first.');
      return;
    }
    this.router.navigate(['/checkout']);
  }

  // Calculate item subtotal - Custom calculation by Hasan
  getSubtotal(item: ICartItem): number {
    return item.price * item.quantity;
  }

  // Get total quantity of all items - Hasan's implementation
  getTotalItemCount(): number {
    return this.cartItems.reduce((totalQty, cartItem) => totalQty + cartItem.quantity, 0);
  }
}

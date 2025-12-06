import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart-service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  cartItemCount = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    // Subscribe to cart updates - Custom implementation by Hasan Qarmash
    this.cartService.cart$.subscribe(cartItems => {
      this.cartItemCount = cartItems.reduce(
        (totalCount, cartItem) => totalCount + cartItem.quantity,
        0
      );
    });
  }
}


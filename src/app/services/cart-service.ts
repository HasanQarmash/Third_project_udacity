import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../model/product.model';

export interface ICartItem extends IProduct {
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // Shopping cart state management - Implemented by Hasan Qarmash
  private shoppingCartItems$ = new BehaviorSubject<ICartItem[]>([]);

  // Public observable for cart subscription across components
  cart$ = this.shoppingCartItems$.asObservable();

  constructor() {
    // Initialize empty cart
  }

  // Add product to shopping cart - Custom logic by Hasan
  addToCart(product: IProduct): void {
    const currentCartState = this.shoppingCartItems$.value;
    const foundItem = currentCartState.find(cartItem => cartItem.id === product.id);

    if (foundItem) {
      // Product already in cart, increment quantity
      foundItem.quantity++;
      this.shoppingCartItems$.next([...currentCartState]);
    } else {
      // New product, add with initial quantity
      const cartItem: ICartItem = { ...product, quantity: 1 };
      this.shoppingCartItems$.next([...currentCartState, cartItem]);
    }
  }

  // Remove item from shopping cart - Hasan's implementation
  removeFromCart(productId: number): void {
    const currentCartState = this.shoppingCartItems$.value;
    const filteredCart = currentCartState.filter(cartItem => cartItem.id !== productId);
    this.shoppingCartItems$.next(filteredCart);
  }

  // Retrieve all cart items
  getItems(): ICartItem[] {
    return this.shoppingCartItems$.value;
  }

  // Calculate total cart value - Modified by Hasan Qarmash
  getTotal(): number {
    return this.shoppingCartItems$.value.reduce(
      (totalPrice, cartItem) => totalPrice + (cartItem.price * cartItem.quantity),
      0
    );
  }

  // Empty the entire shopping cart
  clearCart(): void {
    this.shoppingCartItems$.next([]);
  }

  // Get total number of items in cart
  getItemCount(): number {
    return this.shoppingCartItems$.value.reduce((totalCount, cartItem) => totalCount + cartItem.quantity, 0);
  }
}

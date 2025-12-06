import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../../model/product.model';

@Component({
  selector: 'app-product-item',
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItem {
  // Product input from parent component - Hasan Qarmash
  @Input() product!: IProduct;

  // Event emitter for add to cart action - Custom by Hasan
  @Output() addToCart = new EventEmitter<IProduct>();

  // Emit product to parent when add to cart is clicked - Hasan's implementation
  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}

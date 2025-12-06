import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../model/product.model';
import { ProductItem } from '../productList/product-item/product-item';
import { CartService } from '../../services/cart-service';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductItem],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {
  products: IProduct[] = [];
  loading = true;
  error = '';

  constructor(
    private http: HttpClient,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  // Fetch products from JSON data file - Modified by Hasan Qarmash
  loadProducts(): void {
    this.http.get<IProduct[]>('/assets/data.json').subscribe({
      next: (productData) => {
        this.products = productData;
        this.loading = false;
      },
      error: (errorResponse) => {
        this.error = 'Unable to load products. Please try again later.';
        this.loading = false;
        console.error('Product loading error:', errorResponse);
      }
    });
  }

  // Handle add to cart action - Custom implementation by Hasan
  onAddToCart(product: IProduct): void {
    this.cartService.addToCart(product);
    alert(`✓ ${product.name} has been added to your cart!`);
  }
}

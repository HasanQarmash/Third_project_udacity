import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/product-list/product-list').then((m) => m.ProductList),
  },
  {
    path: 'cart',
    loadComponent: () => import('./components/cart/cart').then((m) => m.Cart),
  },
  {
    path: 'checkout',
    loadComponent: () => import('./components/checkout/checkout').then((m) => m.Checkout),
  },
  {
    path: 'confirmation',
    loadComponent: () => import('./components/confirmation/confirmation').then((m) => m.Confirmation),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

# Hasan's StoreFront - Angular E-Commerce Application

A fully functional single-page e-commerce application built with Angular by Hasan Qarmash, featuring product browsing, shopping cart management, and checkout functionality.

## Project Description

This StoreFront is a modern Angular-based e-commerce application developed by Hasan Qarmash that demonstrates core Angular concepts including:

- Component-based architecture with parent-child relationships
- Service-based state management for shopping cart
- Reactive programming with RxJS Observables
- Template-driven forms with validation
- Angular routing for seamless navigation
- HttpClient for data fetching

### Features

- **Product Catalog**: Browse products with images, descriptions, and prices
- **Shopping Cart**: Add, remove, and manage cart items with real-time total calculation
- **Form Validation**: Checkout form with input validation (name min 3 chars, address min 5 chars, card min 10 chars)
- **Order Confirmation**: Success page displaying order details
- **Responsive Design**: Mobile-friendly UI with modern styling
- **User Feedback**: Alerts when products are added to cart

## Installation and Launch

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation Steps

1. **Clone the repository** (if applicable):

```bash
git clone <repository-url>
cd store-front
```

2. **Install dependencies**:

```bash
npm install
```

3. **Start the development server**:

```bash
npm start
```

Or:

```bash
ng serve
```

4. **Open the application**:
   Navigate to `http://localhost:4200/` in your browser

The application will automatically reload when source files are modified.

## Application Structure

### Components

- **AppComponent**: Root component containing header and router outlet
- **HeaderComponent**: Navigation bar with cart badge
- **ProductListComponent**: Displays product catalog fetched from data.json
- **ProductItemComponent**: Individual product card with add-to-cart functionality
- **CartComponent**: Shopping cart view with item management and total calculation
- **CheckoutComponent**: Checkout form with validation
- **ConfirmationComponent**: Order success page

### Services

- **CartService**: Manages shopping cart state and operations (add, remove, clear, calculate total)

### Models

- **IProduct**: TypeScript interface defining product structure (id, name, price, url, description)
- **ICartItem**: Extends IProduct with quantity field

## User Flow

1. **Home Page** (`/`): Browse products from the catalog
2. **Add to Cart**: Click "Add to Cart" on any product
3. **View Cart** (`/cart`): Review items, quantities, and total cost
4. **Checkout** (`/checkout`): Fill out customer information form
5. **Confirmation** (`/confirmation`): View order success message

## Technical Implementation

### Data Flow

- **Parent to Child**: Uses `@Input()` decorator (e.g., ProductListComponent passes product to ProductItemComponent)
- **Child to Parent**: Uses `@Output()` and `EventEmitter` (e.g., ProductItemComponent emits addToCart event)
- **Sibling Components**: CartService shares cart data between ProductListComponent and CartComponent

### Form Validation

- Template-driven forms using `ngModel`
- Minimum length validation on all fields
- Real-time error messages
- Submit button disabled until form is valid

### Routing

- Uses `<router-outlet>` for component rendering
- `routerLink` for navigation
- Lazy loading with `loadComponent()`
- No page reloads during navigation

### Styling

- Custom CSS for all components
- Responsive grid layout
- Modern UI with hover effects
- Follows clean code standards

## Building for Production

To build the project for production:

```bash
ng build
```

Build artifacts will be stored in the `dist/` directory.

## Running Tests

To execute unit tests:

```bash
ng test
```

## Additional Resources

- [Angular Documentation](https://angular.dev)
- [Angular CLI Reference](https://github.com/angular/angular-cli)

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

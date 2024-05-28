import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductService } from 'src/app/services/product/product.service';
import { WishlistService } from 'src/app/services/wishlist/wishlist.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  cartId!: number;
  wishlistId: number | null = null;
  

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private wishlistServie: WishlistService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      (products: Product[]) => {
        this.products = products;
      },
      (error) => {
        console.error('Error retrieving products:', error);
      }
    );

    this.cartService.getMyCart().subscribe(
      (cart) => {
        this.cartId = cart.id;
      },
      (error) => {
        console.error('Error fetching cart', error);
      }
    );

    this.wishlistServie.getMyWishlist().subscribe(
      (wishlist) => {
        this.wishlistId = wishlist.id;
      },
      (error) => {
        console.error('Error fetching wishlist', error);
      }
    );
  }

  addToCart(product: Product): void {
    if (this.cartId === null) {
      console.error('Cart ID is not available. Unable to add product to cart.');
      return;
    }

    const productId: number = product.id;

    this.cartService.addProductToCart(this.cartId, productId).subscribe(
      response => {
        console.log('Cart updated successfully:', response);
        this.router.navigate(['/cart']);
      },
      error => {
        console.error('An error occurred while adding product to cart:', error);
      }
    );
  }

  addToWislist(product: Product): void {
    if (this.wishlistId === null) {
      console.error('Cart ID is not available. Unable to add produuct to wishlist.');
      return;
    }

    const productId: number = product.id;

    this.wishlistServie.addProductToWishlist(this.wishlistId, productId).subscribe(
      response => {
        console.log('Wishlist updated successfully:', response);
        this.router.navigate(['/wishlist']);
      },
      error => {
        console.error('An error occurred while adding product to wishlist:', error);
      }
    );
  }
  
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/interfaces/book';
import { Cart } from 'src/app/interfaces/cart';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  books: any[] = [];
  games: any[] = [];
  products: any[] = [];
  cartId!: number;
  bookId: number=101;
  gameId: number=101;
  productId: number=101;
  

  cart!:Cart;
  

  constructor(private cartService: CartService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getMyCart();
  }

  getMyCart(): void {
    this.cartService.getMyCart().subscribe(
      (data: Cart) => {
        this.cart = data;
        console.log('Cart fetched successfully:', this.cart);
      },
      (error) => {
        console.error('Eroare la preluarea listei de favorite', error);
      }
    );
  }

  createCart(): void {
    this.cartService.createCart().subscribe(
      (cart: Cart) => {
        console.log('Cart created successfully:', cart);
      
      },
      error => {
        console.error('Error creating cart:', error);
      }
    );
  }
  addBookToCart() {
    this.cartService.addBookToCart(this.cartId, this.bookId).subscribe({
      next: (cart) => {
        console.log('Book added to cart', cart);
        this.router.navigate(['/cart']);
        
      },
      error: (error) => {
        console.error('Error adding book to cart', error);
      }
    });
  }
  removeBookFromCart(bookId: number): void {
    const cartId = this.cart.id;

    this.cartService.removeBookFromCart(cartId, bookId).subscribe(
      (updatedCart) => {
        this.cart = updatedCart;
        console.log('Book removed from cart successfully:', updatedCart);
      },
      (error) => {
        console.error('Error removing book from cart:', error);
      }
    );
  }

  addGameToCart() {
    this.cartService.addGameToCart(this.cartId, this.gameId).subscribe({
      next: (cart) => {
        console.log('Book added to cart', cart);
        this.router.navigate(['/cart']);
        
      },
      error: (error) => {
        console.error('Error adding book to cart', error);
      }
    });
  }
  removeGameFromCart(gameId: number): void {
    const cartId = this.cart.id;

    this.cartService.removeGameFromCart(cartId, gameId).subscribe(
      (updatedCart) => {
        this.cart = updatedCart;
        console.log('Game removed from cart successfully:', updatedCart);
      },
      (error) => {
        console.error('Error removing game from cart:', error);
      }
    );
  }


  addProductToCart() {
    this.cartService.addProductToCart(this.cartId, this.productId).subscribe({
      next: (cart) => {
        console.log('Product added to cart', cart);
        this.router.navigate(['/cart']);
        
      },
      error: (error) => {
        console.error('Error adding product to cart', error);
      }
    });
  }
  removeProductFromCart(productId: number): void {
    const cartId = this.cart.id;

    this.cartService.removeProductFromCart(cartId, productId).subscribe(
      (updatedCart) => {
        this.cart = updatedCart;
        console.log('Product removed from cart successfully:', updatedCart);
      },
      (error) => {
        console.error('Error removing product from cart:', error);
      }
    );
  }
  
  calculateTotal(): number {
    let total = 0;
    if (this.cart) {
      total += this.cart.books.reduce((sum, book) => sum + book.price, 0);
      total += this.cart.games.reduce((sum, game) => sum + game.price, 0);
      total += this.cart.products.reduce((sum, product) => sum + product.price, 0);
    }
    return total;
  }



  
}

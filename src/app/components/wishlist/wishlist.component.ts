import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Wishlist } from 'src/app/interfaces/wishlist';
import { WishlistService } from 'src/app/services/wishlist/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {



 books: any[] = [];
 games: any[] = [];
 products: any[] = [];
  wishlistId!: number;
  bookId: number=101;
  gameId: number=101;
  productId: number=101;
  

  wishlist!:Wishlist;
  

  constructor(private wishlistService: WishlistService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getMyWishlist();
  }

  getMyWishlist(): void {
    this.wishlistService.getMyWishlist().subscribe(
      (data: Wishlist) => {
        this.wishlist = data;
        console.log('Wishlist fetched successfully:', this.wishlist);
      },
      (error) => {
        console.error('Eroare la preluarea listei de favorite', error);
      }
    );
  }

  
  
  createWishlist(): void {
    this.wishlistService.createWishlist().subscribe(
      (wishlist: Wishlist) => {
        console.log('Wishlist created successfully:', wishlist);
      
      },
      error => {
        console.error('Error creating wishlist:', error);
      }
    );
  }
  addBookToWishlist() {
    this.wishlistService.addBookToWishlist(this.wishlistId, this.bookId).subscribe({
      next: (wishlist) => {
        console.log('Book added to wishlist', wishlist);
        this.router.navigate(['/wishlist']);
        
      },
      error: (error) => {
        console.error('Error adding book to wishlist', error);
      }
    });
  }
  removeBookFromWishlist(bookId: number): void {
    const wishlistId= this.wishlist.id;

    this.wishlistService.removeBookFromWishlist(wishlistId, bookId).subscribe(
      (updatedWishlist) => {
        this.wishlist = updatedWishlist;
        console.log('Book removed from wishlist successfully:', updatedWishlist);
      },
      (error) => {
        console.error('Error removing book from wishlist:', error);
      }
    );
  }
  addGameToWishlist() {
    this.wishlistService.addGameToWishlist(this.wishlistId, this.gameId).subscribe({
      next: (wishlist) => {
        console.log('Book added to wishlist', wishlist);
        this.router.navigate(['/wishlist']);
        
      },
      error: (error) => {
        console.error('Error adding game to wishlist', error);
      }
    });
  }
  removeGameFromWishlist(gameId: number): void {
    const wishlistId = this.wishlist.id;

    this.wishlistService.removeGameFromWishlist(wishlistId, gameId).subscribe(
      (updatedWishlist) => {
        this.wishlist = updatedWishlist;
        console.log('Game removed from wishlist successfully:', updatedWishlist);
      },
      (error) => {
        console.error('Error removing book from wishlist:', error);
      }
    );
  }
  addProductToWishlist() {
    this.wishlistService.addProductToWishlist(this.wishlistId, this.productId).subscribe({
      next: (wishlist) => {
        console.log('Product added to wishlist', wishlist);
        this.router.navigate(['/wishlist']);
        
      },
      error: (error) => {
        console.error('Error adding product to wishlist', error);
      }
    });
  }
  removeProductFromWishlist(productId: number): void {
    const wishlistId = this.wishlist.id;

    this.wishlistService.removeProductFromWishlist(wishlistId, productId).subscribe(
      (updatedWishlist) => {
        this.wishlist = updatedWishlist;
        console.log('Product removed from wishlist successfully:', updatedWishlist);
      },
      (error) => {
        console.error('Error removing product from wishlist:', error);
      }
    );
  }
  




}

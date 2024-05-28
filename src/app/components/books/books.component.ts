import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book, BookType } from 'src/app/interfaces/book';
import { BookService } from 'src/app/services/book/book.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { WishlistService } from 'src/app/services/wishlist/wishlist.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit{

  books: Book[] = [];
  bookTypeOptions: string[] = Object.values(BookType);
  selectedBookType: BookType | '' = '';
  cartId: number | null = null;
  wishlistId: number | null = null;
  

  constructor(
    private bookService: BookService,
    private cartService: CartService,
    private wishlistServie: WishlistService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.loadAllBooks();
    this.bookService.getAllBooks().subscribe(
      (books: Book[]) => {
        this.books = books;
      },
      (error) => {
        console.error('Error retrieving books:', error);
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
  loadAllBooks(): void {
    this.bookService.getAllBooks().subscribe(
      (books: Book[]) => {
        this.books = books;
      },
      (error) => {
        console.error('Error retrieving books:', error);
      }
    );
  }
  filterBooksByType(): void {
    if (this.selectedBookType) {
      this.bookService.getBooksByType(this.selectedBookType).subscribe(
        (books: Book[]) => {
          this.books = books;
        },
        (error) => {
          console.error('Error retrieving books by type:', error);
        }
      );
    } else {
      this.loadAllBooks();
    }
  }

  addToCart(book: Book): void {
    if (this.cartId === null) {
      console.error('Cart ID is not available. Unable to add book to cart.');
      return;
    }

    const bookId: number = book.id;

    this.cartService.addBookToCart(this.cartId, bookId).subscribe(
      response => {
        console.log('Cart updated successfully:', response);
        this.router.navigate(['/cart']);
      },
      error => {
        console.error('An error occurred while adding book to cart:', error);
      }
    );
  }

  addToWislist(book: Book): void {
    if (this.wishlistId === null) {
      console.error('Cart ID is not available. Unable to add book to wishlist.');
      return;
    }

    const bookId: number = book.id;

    this.wishlistServie.addBookToWishlist(this.wishlistId, bookId).subscribe(
      response => {
        console.log('Wishlist updated successfully:', response);
        this.router.navigate(['/wishlist']);
      },
      error => {
        console.error('An error occurred while adding book to wishlist:', error);
      }
    );
  }
}
  
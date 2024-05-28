import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book, BookType } from 'src/app/interfaces/book';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  book: Book = {
    id: 0,
    name: '',
    bookType: BookType.ACADEMIC,
    description: '',
    price: 0,
    quantity: 0,
    image: '' 
  };

  

  bookTypeOptions: string[] = Object.values(BookType);

  constructor(private bookService: BookService, private router: Router) { }
  

  createBook() {
    this.bookService.createBook(this.book).subscribe(
      response => {
        console.log( response);
        this.router.navigate(['/books']);
      },
      error => {
        console.error('Error creating game:', error);
      }
    );
  }
}
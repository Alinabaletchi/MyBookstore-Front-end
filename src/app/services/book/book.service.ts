import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Book, BookType } from 'src/app/interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  

  private url = 'http://localhost:8080/api/books';

  constructor(private http: HttpClient) { }

  
  
  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.url}/allBooks`);
  }
  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(`${this.url}/createBooks`, book);
  }

  getBooksByType(type: BookType): Observable<Book[]> {
    const url = `${this.url}/type/${type}`;
    return this.http.get<Book[]>(url).pipe(
    );
  }
  

}

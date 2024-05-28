import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/interfaces/cart';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private apiUrl = 'http://localhost:8080/api/carts';

  constructor(private http: HttpClient) { }

  getMyCart(): Observable<Cart> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token') 
    });
    return this.http.get<Cart>(`${this.apiUrl}/mycart`, { headers });
  }
  
  createCart(): Observable<Cart> {
    return this.http.post<Cart>(this.apiUrl, {});
  }
  addBookToCart(cartId: number, bookId: number): Observable<any> {
    const params = new HttpParams()
      .set('cartId', cartId.toString())
      .set('bookId', bookId.toString());
    return this.http.post(`${this.apiUrl}/addBookToCart`, {}, { params });
  }

  removeBookFromCart(cartId: number, bookId: number): Observable<any> {
    const params = new HttpParams()
      .set('cartId', cartId.toString())
      .set('bookId', bookId.toString());
    return this.http.patch(`${this.apiUrl}/removeBook`, {}, { params });
  }

  addProductToCart(cartId: number, productId: number): Observable<any> {
    const params = new HttpParams()
      .set('cartId', cartId.toString())
      .set('productId', productId.toString());
    return this.http.post(`${this.apiUrl}/addProductToCart`, {}, { params });
  }

  removeProductFromCart(cartId: number, productId: number): Observable<any> {
    const params = new HttpParams()
      .set('cartId', cartId.toString())
      .set('productId', productId.toString());
    return this.http.patch(`${this.apiUrl}/removeProduct`, {}, { params });
  }

  addGameToCart(cartId: number, gameId: number): Observable<any> {
    const params = new HttpParams()
      .set('cartId', cartId.toString())
      .set('gameId', gameId.toString());
    return this.http.post(`${this.apiUrl}/addGameToCart`, {}, { params });
  }

  removeGameFromCart(cartId: number, gameId: number): Observable<any> {
    const params = new HttpParams()
      .set('cartId', cartId.toString())
      .set('gameId', gameId.toString());
    return this.http.patch(`${this.apiUrl}/removeGame`, {}, { params });
  }

}

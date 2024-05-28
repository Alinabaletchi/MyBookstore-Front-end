import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Wishlist } from 'src/app/interfaces/wishlist';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  private apiUrl ='http://localhost:8080/api/wishlist';
  constructor(private http: HttpClient) {}


  getMyWishlist(): Observable<Wishlist> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token') 
    });
    return this.http.get<Wishlist>(`${this.apiUrl}/mywishlist`, { headers });
  }
  
  createWishlist(): Observable<Wishlist> {
    return this.http.post<Wishlist>(this.apiUrl, {});
  }
  addBookToWishlist(wishlistId: number, bookId: number): Observable<any> {
    const params = new HttpParams()
      .set('wishlistId', wishlistId.toString())
      .set('bookId', bookId.toString());
    return this.http.post(`${this.apiUrl}/addBookToWishlist`, {}, { params });
  }

  removeBookFromWishlist(wishlistId: number, bookId: number): Observable<any> {
    const params = new HttpParams()
      .set('wishlistId', wishlistId.toString())
      .set('bookId', bookId.toString());
    return this.http.patch(`${this.apiUrl}/removeBook`, {}, { params });
  }

  addProductToWishlist(wishlistId: number, productId: number): Observable<any> {
    const params = new HttpParams()
      .set('wishlistId', wishlistId.toString())
      .set('productId', productId.toString());
    return this.http.post(`${this.apiUrl}/addProductToWishlist`, {}, { params });
  }

  removeProductFromWishlist(wishlistId: number, productId: number): Observable<any> {
    const params = new HttpParams()
      .set('wishlistId', wishlistId.toString())
      .set('productId', productId.toString());
    return this.http.patch(`${this.apiUrl}/removeProduct`, {}, { params });
  }

  addGameToWishlist(wishlistId: number, gameId: number): Observable<any> {
    const params = new HttpParams()
      .set('wishlistId', wishlistId.toString())
      .set('gameId', gameId.toString());
    return this.http.post(`${this.apiUrl}/addGameToWishlist`, {}, { params });
  }

  removeGameFromWishlist(wishlistId: number, gameId: number): Observable<any> {
    const params = new HttpParams()
      .set('wishlistId', wishlistId.toString())
      .set('gameId', gameId.toString());
    return this.http.patch(`${this.apiUrl}/removeGame`, {}, { params });
  }

}

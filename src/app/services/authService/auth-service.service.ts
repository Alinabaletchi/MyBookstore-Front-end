import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { User } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private loginUrl = 'http://localhost:8080/api/login';  
  private registerUrl = 'http://localhost:8080/api/register';  

  constructor(private http: HttpClient) {}
  login(loginData: { email: string, password: string }): Observable<any> {
    return this.http.post<{token: string, cartId: number}>(this.loginUrl, loginData)
      .pipe(
        tap(response => {
          localStorage.setItem('token', response.token); 
          localStorage.setItem('cartId', response.cartId.toString()); 
        }),
        catchError(error => {
          return throwError(() => new Error('Autentificare eșuată'));
        })
      );
  }

  register(user: User): Observable<any> {
    return this.http.post(this.registerUrl, user, { responseType: 'text' })
      .pipe(
        catchError(error => {
          return throwError(error);
        })
      );
  }
}

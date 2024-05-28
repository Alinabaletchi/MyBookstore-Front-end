import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl = 'http://localhost:8080/api/auth/login';

  
  constructor(private httpReq:HttpClient) {
  }

  
  login(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = JSON.stringify({ email, password });

    return this.httpReq.post(this.loginUrl, body, { headers }).pipe(
      map((response: any) => {
        localStorage.setItem('token', response.token);
        return response;
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  
  getToken(): string | null {
    return localStorage.getItem('token');
  }

 
  isAuthenticated(): boolean {
    return !!this.getToken();
  }


 
}

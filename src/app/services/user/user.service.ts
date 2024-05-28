import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<User> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<User>(this.apiUrl, user, { headers });
  }
}

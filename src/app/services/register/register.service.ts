import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { LoginComponent } from 'src/app/components/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  apiUrl = 'http://localhost:8080/api/register';
  

  constructor(private http: HttpClient) { }

  registerUser(user: any) {
    return this.http.post<any>(this.apiUrl, user);
  }
  
}

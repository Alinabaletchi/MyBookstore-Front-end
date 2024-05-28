import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:8080/api/products';
  constructor(private http: HttpClient) { }

  
  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.apiUrl}/createProducts`, product);
  }
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/allProducts`);
  }

 }

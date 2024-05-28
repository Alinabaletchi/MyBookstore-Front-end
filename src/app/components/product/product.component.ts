import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  product : Product = {
    id:0,
    name: '',
    price: 0,
    description: '',
    quantity: 0,
    image: ''
  };

 constructor(private productService: ProductService, private router: Router) { }

  createProduct(): void {
    this.productService.createProduct(this.product).subscribe(
      response => {
        console.log('Product created successfully:', response);
        this.router.navigate(['/products']);
      },
      error => {
        console.error('Error creating product:', error);
      }
    );
  }
}

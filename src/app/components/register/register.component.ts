import { Component } from '@angular/core';
import { RegisterService } from 'src/app/services/register/register.service';
import { User, UserRole } from 'src/app/interfaces/user';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {

   
    user: User = {
     userId: 0,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
    role:UserRole.USER
  };
  userRoles = [
    { label: 'Admin', value: UserRole.ADMIN },
    { label: 'User', value: UserRole.USER }
];

  constructor(private registerService: RegisterService, private cartService: CartService, private router: Router) { }
  registerUser(): void {
    this.registerService.registerUser(this.user)
      .subscribe(
        (response: User) => {
          console.log('User registered successfully:', response);
          this.createCartForUser();
          this.router.navigate(['/home']);
        },
        error => {
          console.error('Error registering user:', error);
        }
      );
  }
  createCartForUser(): void {
    this.cartService.createCart()
      .subscribe(
        (response: any) => {
          console.log('Cart created successfully:', response);
          const cartId: number = response.cartId;
        },
        error => {
          console.error('Error creating cart:', error);
        }
      );
    }

}


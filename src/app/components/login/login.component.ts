import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';
import { LoginService } from 'src/app/services/login/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  user = {
    email: '',
    password: ''
  };
  errorMessage: string = '';

  constructor(private loginService: LoginService, private cartService:CartService, private router: Router) { }

  login(): void {
    this.loginService.login(this.user.email, this.user.password).subscribe({
      next: (response) => {
        console.log('Autentificare reușită!', response);
        this.router.navigate(['/home']); 
      },
      error: (error) => {
        this.errorMessage = 'Autentificare eșuată. Verifică credențialele.';
        console.error('Eroare la autentificare', error);
      }
    });
  }

}

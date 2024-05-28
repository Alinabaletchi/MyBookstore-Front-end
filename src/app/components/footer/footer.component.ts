import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(public loginService: LoginService, private router: Router) { }
  
  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}

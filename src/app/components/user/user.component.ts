import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { User, UserRole } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
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
 constructor(private userService: UserService, private router:Router) { }


 createUser(): void {
  this.userService.createUser(this.user).subscribe(
    response => {
      console.log('Utilizator creat cu succes:', response);
      this.router.navigate(['/home']);
      
    },
    error => {
      console.error('Eroare la crearea utilizatorului:', error);
      // tratați eroarea, de exemplu, afișați un mesaj de eroare utilizatorului
    }
  );
}
 

}

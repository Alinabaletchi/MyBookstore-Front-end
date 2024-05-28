import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'final-project-demo-62';

  constructor(private http: HttpClient) {}

  logout() {
    // Trimitere cerere de logout către serverul backend
    this.http.post('/api/logout', {}).subscribe(response => {
      // Redirecționează utilizatorul către pagina de login sau altă pagină după delogare
      window.location.href = '/login';
    });
  }

}

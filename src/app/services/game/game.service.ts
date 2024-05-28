import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game, GameType } from 'src/app/interfaces/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private url = 'http://localhost:8080/api/games';
  
  constructor(private http: HttpClient) { }

  createGame(game: Game): Observable<Game> {
    return this.http.post<Game>(`${this.url}/createGames`, game);
  }

  getAllGames(): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.url}/allGames`);
  }

  
  getGamesByType(type: GameType): Observable<Game[]> {
    const url = `${this.url}/type/${type}`;
    return this.http.get<Game[]>(url).pipe(
    );
  }
}

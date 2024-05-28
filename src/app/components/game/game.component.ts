import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Game, GameType } from 'src/app/interfaces/game';
import { GameService } from 'src/app/services/game/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  game: Game = {
    id: 0,
    name: '',
    gameType: GameType.LEGO,
    description: '',
    price: 0,
    quantity: 0,
    image:''
  };

  gameTypeOptions: string[] = Object.values(GameType);

  constructor(private gameService: GameService, private router: Router) { }

  createGame() {
    this.gameService.createGame(this.game).subscribe(
      response => {
        console.log( response);
        this.router.navigate(['/games']);
      },
      error => {
        console.error('Error creating game:', error);
      }
    );
  }
}

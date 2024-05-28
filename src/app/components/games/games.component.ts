import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game, GameType } from 'src/app/interfaces/game';
import { CartService } from 'src/app/services/cart/cart.service';
import { GameService } from 'src/app/services/game/game.service';
import { WishlistService } from 'src/app/services/wishlist/wishlist.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  games: Game[] = [];
  gameTypeOptions: string[] = Object.values(GameType);
  selectedGameType: GameType | '' = '';
  cartId: number | null = null;
  wishlistId: number | null = null;

  constructor(
    private gameService: GameService,
    private cartService: CartService,
    private wishlistServie: WishlistService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAllGames();
    this.gameService.getAllGames().subscribe(
      (games: Game[]) => {
        this.games = games;
      },
      (error) => {
        console.error('Error retrieving games:', error);
      }
    );

    this.cartService.getMyCart().subscribe(
      (cart) => {
        this.cartId = cart.id;
      },
      (error) => {
        console.error('Error fetching cart', error);
      }
    );

    this.wishlistServie.getMyWishlist().subscribe(
      (wishlist) => {
        this.wishlistId = wishlist.id;
      },
      (error) => {
        console.error('Error fetching wishlist', error);
      }
    );
  }
  loadAllGames(): void {
    this.gameService.getAllGames().subscribe(
      (games: Game[]) => {
        this.games = games;
      },
      (error) => {
        console.error('Error retrieving games:', error);
      }
    );
  }
  filterGamesByType(): void {
    if (this.selectedGameType) {
      this.gameService.getGamesByType(this.selectedGameType).subscribe(
        (games: Game[]) => {
          this.games = games;
        },
        (error) => {
          console.error('Error retrieving games by type:', error);
        }
      );
    } else {
      this.loadAllGames();
    }
  }




  addToCart(game: Game): void {
    if (this.cartId === null) {
      console.error('Cart ID is not available. Unable to add game to cart.');
      return;
    }

    const gameId: number = game.id;

    this.cartService.addGameToCart(this.cartId, gameId).subscribe(
      response => {
        console.log('Cart updated successfully:', response);
        this.router.navigate(['/cart']);
      },
      error => {
        console.error('An error occurred while adding game to cart:', error);
      }
    );
  }

  addToWislist(game: Game): void {
    if (this.wishlistId === null) {
      console.error('Cart ID is not available. Unable to add game to wishlist.');
      return;
    }

    const gameId: number = game.id;

    this.wishlistServie.addGameToWishlist(this.wishlistId, gameId).subscribe(
      response => {
        console.log('Wishlist updated successfully:', response);
        this.router.navigate(['/wishlist']);
      },
      error => {
        console.error('An error occurred while adding game to wishlist:', error);
      }
    );
  }
}
  
  


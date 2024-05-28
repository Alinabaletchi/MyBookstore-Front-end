import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { register, login } from './types/route';
import { BookComponent } from './components/book/book.component';
import { UsersComponent } from './components/users/users.component';
import { GameComponent } from './components/game/game.component';
import { BooksComponent } from './components/books/books.component';
import { GamesComponent } from './components/games/games.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  }
  , {
    path: 'user',
    component: UserComponent
  }
  , {
    path: 'users',
    component: UsersComponent
  }
  , {
    path: login,
    component: LoginComponent
  }
  , {
    path: register,
    component: RegisterComponent
  }
  , {
    path: 'book',
    component: BookComponent
  }
  , {
    path: 'game',
    component: GameComponent
  }

  , {
    path: 'books',
    component: BooksComponent
  }
  , {
    path: 'games',
    component: GamesComponent
  }
  , {
    path: 'cart',
    component: CartComponent
  }
  , {
    path: 'product',
    component: ProductComponent
  }
  , {
    path: 'products',
    component: ProductsComponent
  }
  , {
    path: 'wishlist',
    component: WishlistComponent
  },
  { path: 'cart/:id', component: CartComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

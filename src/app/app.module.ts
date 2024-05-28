import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { CartComponent } from './components/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UsersComponent } from './components/users/users.component';
import { BookComponent } from './components/book/book.component';
import { GameComponent } from './components/game/game.component';
import { BooksComponent } from './components/books/books.component';
import { GamesComponent } from './components/games/games.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { FooterComponent } from './components/footer/footer.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    CartComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    BookComponent,
    GameComponent,
    BooksComponent,
    GamesComponent,
    ProductComponent,
    ProductsComponent,
    FooterComponent,
    WishlistComponent
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderComponent,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

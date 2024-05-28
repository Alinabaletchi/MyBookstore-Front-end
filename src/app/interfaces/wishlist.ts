import { Book } from "./book";
import { Game } from "./game";
import { Product } from "./product";
import { User } from "./user";

export interface Wishlist {
    id: number;
  user: User;
  products: Product[];
  books: Book[];
  games: Game[];
}

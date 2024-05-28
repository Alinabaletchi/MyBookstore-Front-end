import { Book } from "./book";
import { Game } from "./game";
import { Product } from "./product";


export interface Cart {
    id: number;
  books: Book[];
  games: Game[];
  products: Product[];
  total: number;
}

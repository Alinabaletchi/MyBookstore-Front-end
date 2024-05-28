export enum BookType {
    FICTION = 'FICTION',
    NON_FICTION = 'NON_FICTION',
    POETRY='POETRY',
    DRAMA='DRAMA',
    FANTASTIC='FANTASTIC',
    ACADEMIC='ACADEMIC'

}

export interface Book {
    id: number;
  name: string;
  bookType:BookType;
  description: string;
  price: number;
  quantity: number;
  image: string;
  
}

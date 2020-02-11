import { Observable } from "rxjs";

export interface IBook {
  name: string;
  price: number;
}

export interface State {
  getBooks$(): Observable<any>;
  getBookDetail$(bookname: string): Observable<any>;
  replaceBooks(books: any): void;
  addBook(book: any): void;
}

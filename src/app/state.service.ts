import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map, take } from "rxjs/operators";
import { State } from "./state.interface";

@Injectable({
  providedIn: "root"
})
export class StateService implements State {
  private books$ = new BehaviorSubject([]);

  constructor() {}

  public replaceBooks(books) {
    this.books$.next(books);
  }

  public getBooks$(): Observable<any> {
    return this.books$;
  }

  public getBookDetail$(bookname: string): Observable<any> {
    return this.books$.pipe(
      map(books => {
        return books.find(book => book.name === bookname);
      })
    );
  }

  public addBook(book: any): void {
    this.books$.pipe(take(1)).subscribe(books => {
      this.books$.next(books.concat(book));
    });
  }
}

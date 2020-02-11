import { Injectable } from "@angular/core";
import { Subject, Observable, BehaviorSubject } from "rxjs";
import { scan, map } from "rxjs/operators";
import { State, IBook } from "./state.interface";

@Injectable({
  providedIn: "root"
})
export class State2Service implements State {
  private state$ = new BehaviorSubject({ book: [] });
  private addBook$ = new Subject<IBook>();
  private update$ = new Subject<Function>();
  private replace$ = new Subject<IBook[]>();

  constructor() {
    this.update$
      .pipe(
        scan(
          (state: any, fn: Function) => {
            return fn(state);
          },
          { book: [] }
        )
      )
      .subscribe(this.state$);

    this.addBook$
      .pipe(
        map((book: IBook) => {
          return (state: any) => {
            state.book.push(book);
            return state;
          };
        })
      )
      .subscribe(this.update$);

    this.replace$
      .pipe(
        map((books: any) => {
          return (state: any) => {
            state.book = books;
            return state;
          };
        })
      )
      .subscribe(this.update$);
  }

  public getBooks$(): Observable<IBook[]> {
    return this.state$.pipe(map((state: any) => state.book));
  }

  public getBookDetail$(bookName): Observable<IBook> {
    return this.getBooks$().pipe(
      map(books => {
        return books.find(book => book.name === bookName);
      })
    );
  }

  public replaceBooks(books: IBook[]): void {
    this.replace$.next(books);
  }

  public addBook(book: IBook): void {
    this.addBook$.next(book);
  }
}

import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class StateService {
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
}

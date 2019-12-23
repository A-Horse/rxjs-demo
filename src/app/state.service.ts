import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
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
}

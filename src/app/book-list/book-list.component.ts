import { Component, OnInit, InjectionToken, Inject } from "@angular/core";
import { Observable } from "rxjs";
import { State } from "../state.interface";
import { State2Service } from "../state2.service";
import { StateService } from "../state.service";
import { map } from "rxjs/operators";

export const StateProvider = new InjectionToken("State", {
  providedIn: "root",
  factory: () => new State2Service()
});

@Component({
  selector: "app-book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.css"]
})
export class BookListComponent implements OnInit {
  public book$: Observable<any[]>;
  public total$: Observable<number>;

  constructor(@Inject(StateProvider) public stateService: State) {
    this.book$ = this.stateService.getBooks$();

    this.total$ = this.book$.pipe(
      map(books => books.reduce((acc, cur) => acc + cur.price, 0))
    );
  }

  ngOnInit() {
    setTimeout(() => {
      this.stateService.replaceBooks([
        { name: "clean code", price: 100 },
        { name: "refactor", price: 120 }
      ]);
    }, 2000);

    setTimeout(() => {
      this.stateService.addBook({ name: "clean code", price: 100 });
    }, 3000);

    setTimeout(() => {
      this.stateService.replaceBooks([{ name: "clean code2", price: 100 }]);
    }, 5000);
  }
}

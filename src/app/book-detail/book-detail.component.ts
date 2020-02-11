import { Observable } from "rxjs";
import { Component, OnInit, Input, Inject } from "@angular/core";
import { StateProvider } from "../book-list/book-list.component";
import { State, IBook } from "../state.interface";

@Component({
  selector: "app-book-detail",
  templateUrl: "./book-detail.component.html",
  styleUrls: ["./book-detail.component.css"]
})
export class BookDetailComponent implements OnInit {
  @Input() set name(name: string) {
    this.book$ = this.stateService.getBookDetail$(name);
  }

  book$: Observable<IBook>;

  constructor(@Inject(StateProvider) public stateService: State) {}

  ngOnInit() {}
}

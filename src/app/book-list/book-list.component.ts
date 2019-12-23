import { Component, OnInit } from "@angular/core";
import { StateService } from "../state.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.css"]
})
export class BookListComponent implements OnInit {
  public book$: Observable<any[]>;

  constructor(public stateService: StateService) {
    this.book$ = stateService.getBooks$();
  }

  ngOnInit() {
    setTimeout(() => {
      this.stateService.replaceBooks([
        { name: "clean code", price: 100 },
        { name: "refactor", price: 120 }
      ]);
    }, 300);
  }
}

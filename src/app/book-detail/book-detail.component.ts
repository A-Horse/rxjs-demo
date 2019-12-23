import { StateService } from "./../state.service";
import { Observable } from "rxjs";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-book-detail",
  templateUrl: "./book-detail.component.html",
  styleUrls: ["./book-detail.component.css"]
})
export class BookDetailComponent implements OnInit {
  @Input() set name(name: string) {
    this.book$ =  this.stateService.getBookDetail$(name);
  }

  book$: Observable<any>;

  constructor(private stateService: StateService) {}

  ngOnInit() {}

}

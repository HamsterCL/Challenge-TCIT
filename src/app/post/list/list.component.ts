import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { selectAllPosts } from "../state/selectors/post.selector";
import * as PostActions from "../state/action/post.action";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  posts$: Observable<any[]>;

  constructor(private store: Store) {
    this.posts$ = this.store.select(selectAllPosts);
  }

  ngOnInit(): void {
    this.store.dispatch(PostActions.loadPosts());
  }

}

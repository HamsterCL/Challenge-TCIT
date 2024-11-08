import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { selectAllPosts } from "../state/selectors/post.selector";
import * as PostActions from "../state/action/post.action";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteComponent  implements OnInit {

  public posts$ = this.store.select(selectAllPosts);
  public idPostDelete: number | undefined;
  public isAlertOpen = false;
  public alertButtons = [
    {
      text: 'Aceptar',
      role: 'confirm',
      handler: () => {
        this.store.dispatch(PostActions.deletePost({ id: this.idPostDelete }));
      },
    },
    {
      text: 'Cancelar',
      role: 'cancel',
    },

  ];

  constructor(private store: Store) {
    this.posts$ = this.store.select(selectAllPosts);
  }

  ngOnInit(): void {
    this.store.dispatch(PostActions.loadPosts());
  }

  onSetQuestionsOpen(isOpen: boolean, id: number) {
    this.isAlertOpen = isOpen;
    this.idPostDelete = id;
  }

}

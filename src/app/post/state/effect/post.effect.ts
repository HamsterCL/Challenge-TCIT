import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as PostActions from '../action/post.action';
import {FakeService} from "../../../services/fake.service";

@Injectable()
export class PostEffect {

  constructor(private actions$: Actions, private service: FakeService) {}

  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.loadPosts),
      mergeMap(() =>
        this.service.getAllPost().pipe(
          map((posts) => PostActions.loadPostsSuccess({ posts })),
          catchError((error) => of(PostActions.loadPostsFailure({ error })))
        )
      )
    )
  );

  deletePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.deletePost),
      mergeMap(action =>
        this.service.deletePost(action.id).pipe(
          map(id => PostActions.deletePostSuccess({ id })),
          catchError(error => of(PostActions.deletePostFailure({ error })))
        )
      )
    )
  );

  addPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.addPost),
      mergeMap(action =>
        this.service.addPost(action.post).pipe(
          map(post => PostActions.addPostSuccess({ post })),
          catchError(error => of(PostActions.addPostFailure({ error })))
        )
      )
    )
  );
}

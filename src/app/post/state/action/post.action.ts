import {createAction, props} from "@ngrx/store";
import {Post} from "../../../interface/post.interface";

export const loadPosts = createAction('[Post API] Load Posts');

export const loadPostsSuccess = createAction(
  '[Post API] Load Posts Success',
  props<{ posts: any[] }>()
);

export const loadPostsFailure = createAction(
  '[Post API] Load Posts Failure',
  props<{ error: any }>()
);

export const deletePost = createAction(
  '[Post] Delete Post',
  props<{ id: number | undefined }>()
);

export const deletePostSuccess = createAction(
  '[Post] Delete Post Success',
  props<{ id: number }>()
);

export const deletePostFailure = createAction(
  '[Post] Delete Post Failure',
  props<{ error: any }>()
);

export const addPost = createAction(
  '[Post] Add Post',
  props<{ post: Post }>()
);

export const addPostSuccess = createAction(
  '[Post] Add Post Success',
  props<{ post: Post }>()
);

export const addPostFailure = createAction(
  '[Post] Add Post Failure',
  props<{ error: any }>()
);

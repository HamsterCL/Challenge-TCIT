import {createAction, props} from "@ngrx/store";


export const loadPosts = createAction('[Post API] Load Posts');
export const loadPostsSuccess = createAction(
  '[Post API] Load Posts Success',
  props<{ posts: any[] }>()
);
export const loadPostsFailure = createAction(
  '[Post API] Load Posts Failure',
  props<{ error: any }>()
);

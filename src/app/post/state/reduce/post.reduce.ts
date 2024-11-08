import { createReducer, on } from '@ngrx/store';
import * as PostActions from '../action/post.action';

export interface PostState {
  posts: any[];
  error: any;
}

export const initialState: PostState = {
  posts: [],
  error: null,
};

export const postReducer = createReducer(
  initialState,
  on(PostActions.loadPostsSuccess, (state, { posts }) => ({
    ...state,
    posts,
  })),
  on(PostActions.loadPostsFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(PostActions.deletePostSuccess, (state, { id }) => ({
    ...state,
    posts: state.posts.filter(post => post._id !== id)
  })),
  on(PostActions.deletePostFailure, (state, { error }) => ({
    ...state,
    error
  })),
  on(PostActions.addPostSuccess, (state, { post }) => ({
    ...state,
    posts: [...state.posts, post]
  })),
  on(PostActions.addPostFailure, (state, { error }) => ({
    ...state,
    error
  }))
);

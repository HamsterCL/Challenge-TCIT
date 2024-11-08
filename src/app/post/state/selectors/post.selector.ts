import { createSelector, createFeatureSelector } from '@ngrx/store';
import { PostState } from "../reduce/post.reduce";

export const selectPostState = createFeatureSelector<PostState>('post');

export const selectAllPosts = createSelector(
  selectPostState,
  (state: PostState) => state?.posts || []
);

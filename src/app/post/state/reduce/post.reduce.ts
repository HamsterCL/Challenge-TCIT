import { createReducer, on } from '@ngrx/store';
import * as PostActions from '../actions/post.actions';

export interface DataState {
  data: any;
  error: any;
}

const initialState: DataState = {
  data: null,
  error: null,
};

export const dataReducer = createReducer(
  initialState,
  on(PostActions.loadDataSuccess, (state, { data }) => ({ ...state, data })),
  on(PostActions.loadDataFailure, (state, { error }) => ({ ...state, error }))
);

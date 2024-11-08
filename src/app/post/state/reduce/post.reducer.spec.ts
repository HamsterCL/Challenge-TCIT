import { postReducer, initialState, PostState } from "./post.reduce";
import * as PostActions from "../action/post.action";

describe('PostReducer', () => {
  it('should return the initial state when an unknown action is used', () => {
    const action = { type: 'Unknown' } as any;
    const state = postReducer(initialState, action);
    expect(state).toBe(initialState);
  });

  it('should load posts successfully', () => {
    const mockPosts = [
      {
        "_id": 1,
        "name": "Lucía Roldán",
        "description": "Artista de murales urbanos que retrata la cultura local en sus obras."
      },
      {
        "_id": 2,
        "name": "Esteban Calderón",
        "description": "Veterinario especializado en animales exóticos, trabaja en una reserva natural."
      }
    ];
    const action = PostActions.loadPostsSuccess({ posts: mockPosts });
    const expectedState: PostState = {
      ...initialState,
      posts: mockPosts,
    };
    const state = postReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });

  it('should handle loadPostsFailure', () => {
    const error = { message: 'Error loading posts' };
    const action = PostActions.loadPostsFailure({ error });
    const expectedState: PostState = {
      ...initialState,
      error,
    };
    const state = postReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });
});

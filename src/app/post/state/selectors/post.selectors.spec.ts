import {selectAllPosts} from "./post.selector";
import {PostState} from "../reduce/post.reduce";

describe('Post Selectors', () => {
  const initialState: PostState = {
    posts: [
      {
        "_id": 1,
        "name": "Lucía Roldán",
        "description": "Artista de murales urbanos que retrata la cultura local en sus obras."
      },
      {
        "_id": 2,
        "name": "Esteban Calderón",
        "description": "Veterinario especializado en animales exóticos, trabaja en una reserva natural."
      },
    ],
    error: null,
  };

  it('should select all posts', () => {
    const result = selectAllPosts.projector(initialState);
    expect(result).toEqual(initialState.posts);
  });
});

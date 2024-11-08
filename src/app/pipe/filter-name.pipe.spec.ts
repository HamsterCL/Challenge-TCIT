import { FilterNamePipe } from './filter-name.pipe';

describe('FilterNamePipe', () => {
  let pipe: FilterNamePipe;

  beforeEach(() => {
    pipe = new FilterNamePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return a list of posts that contain the specified name', () => {
    const posts = [
      { _id: 1, name: 'Lucía Roldán', description: 'Artista de murales urbanos.' },
      { _id: 2, name: 'Esteban Calderón', description: 'Veterinario especializado en animales exóticos.' },
      { _id: 3, name: 'Alejandra Valdés', description: 'Ingeniera ambiental.' }
    ];
    const searchTerm = 'Lucía';

    const result = pipe.transform(posts, searchTerm);

    expect(result.length).toBe(1);
    expect(result[0].name).toBe('Lucía Roldán');
  });

  it('should return an empty list if the name is not found', () => {
    const posts = [
      { _id: 1, name: 'Lucía Roldán', description: 'Artista de murales urbanos.' },
      { _id: 2, name: 'Esteban Calderón', description: 'Veterinario especializado en animales exóticos.' },
      { _id: 3, name: 'Alejandra Valdés', description: 'Ingeniera ambiental.' }
    ];
    const searchTerm = 'Juan';

    const result = pipe.transform(posts, searchTerm);

    expect(result.length).toBe(0);
  });

  it('should return all posts if search term is empty', () => {
    const posts = [
      { _id: 1, name: 'Lucía Roldán', description: 'Artista de murales urbanos.' },
      { _id: 2, name: 'Esteban Calderón', description: 'Veterinario especializado en animales exóticos.' },
      { _id: 3, name: 'Alejandra Valdés', description: 'Ingeniera ambiental.' }
    ];
    const searchTerm = '';

    const result = pipe.transform(posts, searchTerm);

    expect(result.length).toBe(3);
  });

  it('should return all posts if the name contains the search term anywhere', () => {
    const posts = [
      { _id: 1, name: 'Lucía Roldán', description: 'Artista de murales urbanos.' },
      { _id: 2, name: 'Esteban Calderón', description: 'Veterinario especializado en animales exóticos.' },
      { _id: 3, name: 'Alejandra Valdés', description: 'Ingeniera ambiental.' }
    ];
    const searchTerm = 'a';

    const result = pipe.transform(posts, searchTerm);

    expect(result.length).toBe(3); // Todos los nombres contienen 'a'
  });

});

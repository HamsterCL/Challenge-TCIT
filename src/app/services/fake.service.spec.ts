import { TestBed } from '@angular/core/testing';
import { Post } from "../interface/post.interface";
import { FakeService } from './fake.service';

describe('FakeService', () => {
  let service: FakeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FakeService]
    });
    service = TestBed.inject(FakeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable of Post array', (done) => {
    const expectedData: Post[] = service.data;
    service.getAllPost().subscribe(posts => {
      expect(posts.length).toBe(12);
      expect(posts).toEqual(expectedData);
      done();
    });
  });

  it('should delete the post with the specified ID', (done) => {
    const postIdToDelete = 5;
    service.deletePost(postIdToDelete).subscribe((id: number) => {
      expect(id).toBe(postIdToDelete);
      expect(service.data.find(post => post._id === postIdToDelete));
      done();
    });
  });

  it('should return an error if the post to delete does not exist', (done) => {
    const invalidPostId = 99;
    service.deletePost(invalidPostId).subscribe({
      next: () => {},
      error: (error) => {
        expect(error).toBeTruthy();
        expect(error.message).toBe('Post no encontrado');
        done();
      }
    });
  });

  it('should add a new post', (done) => {
    const newPost: Post = { name: 'Nuevo Post', description: 'Descripción de prueba', _id: 98989 };

    service.addPost(newPost).subscribe((post: Post) => {
      expect(post._id).toBeGreaterThan(0);
      expect(post.name).toBe(newPost.name);
      expect(post.description).toBe(newPost.description);
      expect(service.data.some(p => p._id === post._id)).toBeTrue();
      done();
    });
  });
});

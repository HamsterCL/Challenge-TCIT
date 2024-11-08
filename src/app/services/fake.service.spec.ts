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
});

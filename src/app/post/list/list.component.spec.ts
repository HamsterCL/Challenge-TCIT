import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListComponent } from './list.component';
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {initialState} from "../state/reduce/post.reduce";
import {Store} from "@ngrx/store";

import * as PostActions from "../../post/state/action/post.action";
import {selectAllPosts} from "../state/selectors/post.selector";

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let store: MockStore;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      imports: [IonicModule.forRoot()],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    store = TestBed.inject(Store) as MockStore;
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch loadPosts on init', () => {
    const dispatchSpy = spyOn(store, 'dispatch');
    component.ngOnInit();
    expect(dispatchSpy).toHaveBeenCalledWith(PostActions.loadPosts());
  });

  it('should select posts', (done) => {
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
      },
    ];
    store.overrideSelector(selectAllPosts, mockPosts);
    fixture.detectChanges();

    component.posts$.subscribe(posts => {
      expect(posts).toEqual(mockPosts);
      done();
    });
  });
});

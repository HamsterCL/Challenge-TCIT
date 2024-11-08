import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeleteComponent } from './delete.component';
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {Store} from "@ngrx/store";
import {selectAllPosts} from "../state/selectors/post.selector";
import * as PostActions from "../state/action/post.action";

describe('DeleteComponent', () => {
  let component: DeleteComponent;
  let fixture: ComponentFixture<DeleteComponent>;
  let store: MockStore;
  let dispatchSpy: jasmine.Spy;

  const initialState = {
    posts: [
      { _id: 1, name: 'Post 1', description: 'Descripción 1' },
      { _id: 2, name: 'Post 2', description: 'Descripción 2' }
    ]
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteComponent ],
      imports: [IonicModule.forRoot()],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store) as MockStore;
    dispatchSpy = spyOn(store, 'dispatch');
    store.overrideSelector(selectAllPosts, initialState.posts);
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('must dispatch the action of loading posts when initializing', () => {
    expect(dispatchSpy).toHaveBeenCalledWith(PostActions.loadPosts());
  });

  it('should open the alert and set the id of the post to delete', () => {
    const postId = 2;
    component.onSetQuestionsOpen(true, postId);

    expect(component.isAlertOpen).toBeTrue();
    expect(component.idPostDelete).toBe(postId);
  });

  it('should dispatch the deletePost action when the deletion is confirmed', () => {
    const postId = 1;
    component.idPostDelete = postId;

    // Ejecuta el handler de confirmación de la alerta
    // @ts-ignore
    component.alertButtons[0].handler();
    expect(dispatchSpy).toHaveBeenCalledWith(PostActions.deletePost({ id: postId }));
  });

});

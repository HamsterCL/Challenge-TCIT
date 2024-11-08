import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewComponent } from './new.component';
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { Store } from "@ngrx/store";
import * as PostActions from "../state/action/post.action";

describe('NewComponent', () => {
  let component: NewComponent;
  let fixture: ComponentFixture<NewComponent>;
  let store: MockStore;
  let dispatchSpy: jasmine.Spy;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewComponent ],
      imports: [IonicModule.forRoot()],
      providers: [provideMockStore()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store) as MockStore;
    dispatchSpy = spyOn(store, 'dispatch');
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be invalid if fields do not meet validations', () => {
    component.userForm.setValue({ name: 'Test', description: 'Desc' });
    expect(component.userForm.invalid).toBeTrue();
  });

  it('should be valid if the fields meet the validations', () => {
    component.userForm.setValue({ name: 'Nombre Válido', description: 'Descripción Válida' });
    expect(component.userForm.valid).toBeTrue();
  });

  it('should show error alert if form is invalid', () => {
    component.userForm.setValue({ name: 'Test', description: 'Desc' });
    component.onSavePost();
    expect(component.isAlertOpen).toBeTrue();
    expect(component.isAlertOKOpen).toBeFalse();
  });

  it('should reset the form after saving', () => {
    component.userForm.setValue({ name: 'Nombre Válido', description: 'Descripción Válida' });
    component.onSavePost();

    expect(component.userForm.value).toEqual({ name: null, description: null });
  });
});

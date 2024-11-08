import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilterComponent } from './filter.component';
import {provideMockStore} from "@ngrx/store/testing";
import {initialState} from "../state/reduce/post.reduce";
import {Store, StoreModule} from "@ngrx/store";
import {FormsModule} from "@angular/forms";
import {of} from "rxjs";
import {selectAllPosts} from "../state/selectors/post.selector";
import {FilterNamePipe} from "../../pipe/filter-name.pipe";

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;
  let store: Store;

  const mockPosts = [
    { _id: 1, name: 'Lucía Roldán', description: 'Artista de murales urbanos.' },
    { _id: 2, name: 'Esteban Calderón', description: 'Veterinario especializado.' },
    { _id: 3, name: 'Alejandra Valdés', description: 'Ingeniera ambiental.' }
  ];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterComponent ],
      imports: [IonicModule.forRoot(), FormsModule, StoreModule.forRoot({}), FilterNamePipe],
    }).compileComponents();

    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(Store);
    spyOn(store, 'select').and.returnValue(of(mockPosts));
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should update filterPost when a term is entered into the search field', () => {
    const input = fixture.nativeElement.querySelector('input');
    input.value = 'Lucía';
    input.dispatchEvent(new Event('input'));
    expect(component.filterPost).toBe('Lucía');
  });

  xit('should show posts that match the filter', () => {
    component.filterPost = 'Lucía';
    fixture.detectChanges();  // Detectar cambios en el componente
    const posts = fixture.nativeElement.querySelectorAll('li');
    expect(posts.length).toBe(1);  // Debería haber un solo post que coincida con 'Lucía'
    expect(posts[0].textContent).toContain('Lucía Roldán');
  });

  xit('should show all posts if there is no filter', () => {
    component.filterPost = '';
    fixture.detectChanges();
    const posts = fixture.nativeElement.querySelectorAll('li');
    expect(posts.length).toBe(mockPosts.length);  // Debería mostrar todos los posts
  });

  xit('should apply the filter pipe correctly', () => {
    component.filterPost = 'Esteban';
    fixture.detectChanges();
    const posts = fixture.nativeElement.querySelectorAll('li');
    expect(posts.length).toBe(1);  // Solo debe mostrar el post que contiene "Esteban"
    expect(posts[0].textContent).toContain('Esteban Calderón');
  });
});

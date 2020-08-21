import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListSingleFormComponent } from './book-list-single-form.component';

describe('BookListSingleFormComponent', () => {
  let component: BookListSingleFormComponent;
  let fixture: ComponentFixture<BookListSingleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookListSingleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListSingleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListSingleBookComponent } from './book-list-single-book.component';

describe('BookListSingleBookComponent', () => {
  let component: BookListSingleBookComponent;
  let fixture: ComponentFixture<BookListSingleBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookListSingleBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListSingleBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

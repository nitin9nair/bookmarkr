import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkAddComponent } from './bookmark-add.component';

describe('BookmarkAddComponent', () => {
  let component: BookmarkAddComponent;
  let fixture: ComponentFixture<BookmarkAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarkAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

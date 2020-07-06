import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmeetingComponent } from './bookmeeting.component';

describe('BookmeetingComponent', () => {
  let component: BookmeetingComponent;
  let fixture: ComponentFixture<BookmeetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmeetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

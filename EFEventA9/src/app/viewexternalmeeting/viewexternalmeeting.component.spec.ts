import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewexternalmeetingComponent } from './viewexternalmeeting.component';

describe('ViewexternalmeetingComponent', () => {
  let component: ViewexternalmeetingComponent;
  let fixture: ComponentFixture<ViewexternalmeetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewexternalmeetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewexternalmeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

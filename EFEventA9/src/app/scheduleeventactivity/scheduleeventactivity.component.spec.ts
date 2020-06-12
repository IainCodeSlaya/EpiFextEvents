import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleeventactivityComponent } from './scheduleeventactivity.component';

describe('ScheduleeventactivityComponent', () => {
  let component: ScheduleeventactivityComponent;
  let fixture: ComponentFixture<ScheduleeventactivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleeventactivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleeventactivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

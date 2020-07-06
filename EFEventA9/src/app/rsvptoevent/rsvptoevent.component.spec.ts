import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsvptoeventComponent } from './rsvptoevent.component';

describe('RsvptoeventComponent', () => {
  let component: RsvptoeventComponent;
  let fixture: ComponentFixture<RsvptoeventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsvptoeventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsvptoeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

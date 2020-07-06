import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecttimeslotComponent } from './selecttimeslot.component';

describe('SelecttimeslotComponent', () => {
  let component: SelecttimeslotComponent;
  let fixture: ComponentFixture<SelecttimeslotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecttimeslotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecttimeslotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddguesttolistComponent } from './addguesttolist.component';

describe('AddguesttolistComponent', () => {
  let component: AddguesttolistComponent;
  let fixture: ComponentFixture<AddguesttolistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddguesttolistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddguesttolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

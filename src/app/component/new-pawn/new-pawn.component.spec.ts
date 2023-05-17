import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPawnComponent } from './new-pawn.component';

describe('NewPawnComponent', () => {
  let component: NewPawnComponent;
  let fixture: ComponentFixture<NewPawnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPawnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPawnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

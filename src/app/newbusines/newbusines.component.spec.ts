import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbusinesComponent } from './newbusines.component';

describe('NewbusinesComponent', () => {
  let component: NewbusinesComponent;
  let fixture: ComponentFixture<NewbusinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewbusinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewbusinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InovationComponent } from './inovation.component';

describe('InovationComponent', () => {
  let component: InovationComponent;
  let fixture: ComponentFixture<InovationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InovationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InovationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

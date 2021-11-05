import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumericControlComponent } from './numeric-control.component';

describe('NumericControlComponent', () => {
  let component: NumericControlComponent;
  let fixture: ComponentFixture<NumericControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumericControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumericControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

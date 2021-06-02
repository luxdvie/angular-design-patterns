import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoryPatternDemoComponent } from './factory-pattern-demo.component';

describe('FactoryPatternDemoComponent', () => {
  let component: FactoryPatternDemoComponent;
  let fixture: ComponentFixture<FactoryPatternDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactoryPatternDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoryPatternDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

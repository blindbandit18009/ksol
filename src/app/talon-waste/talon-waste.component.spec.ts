import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalonWasteComponent } from './talon-waste.component';

describe('TalonWasteComponent', () => {
  let component: TalonWasteComponent;
  let fixture: ComponentFixture<TalonWasteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalonWasteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalonWasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

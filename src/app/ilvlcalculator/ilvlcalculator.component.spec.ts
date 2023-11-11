import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IlvlcalculatorComponent } from './ilvlcalculator.component';

describe('IlvlcalculatorComponent', () => {
  let component: IlvlcalculatorComponent;
  let fixture: ComponentFixture<IlvlcalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IlvlcalculatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IlvlcalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharImportComponent } from './char-import.component';

describe('CharImportComponent', () => {
  let component: CharImportComponent;
  let fixture: ComponentFixture<CharImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharImportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

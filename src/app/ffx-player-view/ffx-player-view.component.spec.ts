import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FfxPlayerViewComponent } from './ffx-player-view.component';

describe('FfxPlayerViewComponent', () => {
  let component: FfxPlayerViewComponent;
  let fixture: ComponentFixture<FfxPlayerViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FfxPlayerViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FfxPlayerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

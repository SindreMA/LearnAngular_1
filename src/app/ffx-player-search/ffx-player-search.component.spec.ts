import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FfxPlayerSearchComponent } from './ffx-player-search.component';

describe('FfxPlayerSearchComponent', () => {
  let component: FfxPlayerSearchComponent;
  let fixture: ComponentFixture<FfxPlayerSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FfxPlayerSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FfxPlayerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FfxPlayerListComponent } from './ffx-player-list.component';

describe('FfxPlayerListComponent', () => {
  let component: FfxPlayerListComponent;
  let fixture: ComponentFixture<FfxPlayerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FfxPlayerListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FfxPlayerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

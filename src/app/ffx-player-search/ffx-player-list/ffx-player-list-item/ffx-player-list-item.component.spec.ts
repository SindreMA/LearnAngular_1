import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FfxPlayerListItemComponent } from './ffx-player-list-item.component';

describe('FfxPlayerListItemComponent', () => {
  let component: FfxPlayerListItemComponent;
  let fixture: ComponentFixture<FfxPlayerListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FfxPlayerListItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FfxPlayerListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

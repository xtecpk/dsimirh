import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavesPopupComponent } from './leaves-popup.component';

describe('LeavesPopupComponent', () => {
  let component: LeavesPopupComponent;
  let fixture: ComponentFixture<LeavesPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeavesPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeavesPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

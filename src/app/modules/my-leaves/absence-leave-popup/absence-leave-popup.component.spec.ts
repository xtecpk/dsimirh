import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsenceLeavePopupComponent } from './absence-leave-popup.component';

describe('AbsenceLeavePopupComponent', () => {
  let component: AbsenceLeavePopupComponent;
  let fixture: ComponentFixture<AbsenceLeavePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbsenceLeavePopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbsenceLeavePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

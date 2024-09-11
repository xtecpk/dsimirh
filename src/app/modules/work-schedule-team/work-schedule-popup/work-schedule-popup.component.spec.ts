import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkSchedulePopupComponent } from './work-schedule-popup.component';

describe('WorkSchedulePopupComponent', () => {
  let component: WorkSchedulePopupComponent;
  let fixture: ComponentFixture<WorkSchedulePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkSchedulePopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkSchedulePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

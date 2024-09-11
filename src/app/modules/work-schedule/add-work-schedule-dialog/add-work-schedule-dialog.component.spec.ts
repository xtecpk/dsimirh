import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorkScheduleDialogComponent } from './add-work-schedule-dialog.component';

describe('AddWorkScheduleDialogComponent', () => {
  let component: AddWorkScheduleDialogComponent;
  let fixture: ComponentFixture<AddWorkScheduleDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddWorkScheduleDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddWorkScheduleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

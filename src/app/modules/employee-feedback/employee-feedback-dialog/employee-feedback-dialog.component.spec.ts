import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFeedbackDialogComponent } from './employee-feedback-dialog.component';

describe('EmployeeFeedbackDialogComponent', () => {
  let component: EmployeeFeedbackDialogComponent;
  let fixture: ComponentFixture<EmployeeFeedbackDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeFeedbackDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeFeedbackDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

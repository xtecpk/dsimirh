import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackFormDoctorsComponent } from './feedback-form-doctors.component';

describe('FeedbackFormDoctorsComponent', () => {
  let component: FeedbackFormDoctorsComponent;
  let fixture: ComponentFixture<FeedbackFormDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackFormDoctorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackFormDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

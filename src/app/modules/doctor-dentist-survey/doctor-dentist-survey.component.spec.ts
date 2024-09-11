import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorDentistSurveyComponent } from './doctor-dentist-survey.component';

describe('DoctorDentistSurveyComponent', () => {
  let component: DoctorDentistSurveyComponent;
  let fixture: ComponentFixture<DoctorDentistSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorDentistSurveyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorDentistSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

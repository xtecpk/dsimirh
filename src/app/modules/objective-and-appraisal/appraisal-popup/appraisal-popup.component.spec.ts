import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppraisalPopupComponent } from './appraisal-popup.component';

describe('AppraisalPopupComponent', () => {
  let component: AppraisalPopupComponent;
  let fixture: ComponentFixture<AppraisalPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppraisalPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppraisalPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

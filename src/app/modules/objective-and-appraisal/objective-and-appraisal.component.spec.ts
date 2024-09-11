import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectiveAndAppraisalComponent } from './objective-and-appraisal.component';

describe('ObjectiveAndAppraisalComponent', () => {
  let component: ObjectiveAndAppraisalComponent;
  let fixture: ComponentFixture<ObjectiveAndAppraisalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjectiveAndAppraisalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectiveAndAppraisalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NursingSurveysComponent } from './nursing-surveys.component';

describe('NursingSurveysComponent', () => {
  let component: NursingSurveysComponent;
  let fixture: ComponentFixture<NursingSurveysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NursingSurveysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NursingSurveysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

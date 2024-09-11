import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualReviewsComponent } from './annual-reviews.component';

describe('AnnualReviewsComponent', () => {
  let component: AnnualReviewsComponent;
  let fixture: ComponentFixture<AnnualReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnualReviewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnualReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

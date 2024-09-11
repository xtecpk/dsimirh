import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayLeaveComponent } from './day-leave.component';

describe('DayLeaveComponent', () => {
  let component: DayLeaveComponent;
  let fixture: ComponentFixture<DayLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DayLeaveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DayLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

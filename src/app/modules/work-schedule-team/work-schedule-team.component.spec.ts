import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkScheduleTeamComponent } from './work-schedule-team.component';

describe('WorkScheduleTeamComponent', () => {
  let component: WorkScheduleTeamComponent;
  let fixture: ComponentFixture<WorkScheduleTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkScheduleTeamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkScheduleTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

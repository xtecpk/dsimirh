import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsByDepartmentComponent } from './jobs-by-department.component';

describe('JobsByDepartmentComponent', () => {
  let component: JobsByDepartmentComponent;
  let fixture: ComponentFixture<JobsByDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobsByDepartmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobsByDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

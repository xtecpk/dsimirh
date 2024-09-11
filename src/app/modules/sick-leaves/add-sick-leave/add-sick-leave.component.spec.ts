import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSickLeaveComponent } from './add-sick-leave.component';

describe('AddSickLeaveComponent', () => {
  let component: AddSickLeaveComponent;
  let fixture: ComponentFixture<AddSickLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSickLeaveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSickLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

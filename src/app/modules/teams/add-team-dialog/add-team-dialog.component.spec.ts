import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTeamDialogComponent } from './add-team-dialog.component';

describe('AddTeamDialogComponent', () => {
  let component: AddTeamDialogComponent;
  let fixture: ComponentFixture<AddTeamDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTeamDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTeamDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

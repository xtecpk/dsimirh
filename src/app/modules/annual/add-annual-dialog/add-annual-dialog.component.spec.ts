import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnnualDialogComponent } from './add-annual-dialog.component';

describe('AddAnnualDialogComponent', () => {
  let component: AddAnnualDialogComponent;
  let fixture: ComponentFixture<AddAnnualDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAnnualDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAnnualDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

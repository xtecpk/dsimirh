import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubDivisionDialogComponent } from './add-sub-division-dialog.component';

describe('AddSubDivisionDialogComponent', () => {
  let component: AddSubDivisionDialogComponent;
  let fixture: ComponentFixture<AddSubDivisionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSubDivisionDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSubDivisionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBonusDialogComponent } from './add-bonus-dialog.component';

describe('AddBonusDialogComponent', () => {
  let component: AddBonusDialogComponent;
  let fixture: ComponentFixture<AddBonusDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddBonusDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBonusDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

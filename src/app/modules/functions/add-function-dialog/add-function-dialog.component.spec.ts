import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFunctionDialogComponent } from './add-function-dialog.component';

describe('AddFunctionDialogComponent', () => {
  let component: AddFunctionDialogComponent;
  let fixture: ComponentFixture<AddFunctionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddFunctionDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFunctionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

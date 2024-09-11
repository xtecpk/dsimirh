import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPrivilegeDialogComponent } from './add-privilege-dialog.component';

describe('AddPrivilegeDialogComponent', () => {
  let component: AddPrivilegeDialogComponent;
  let fixture: ComponentFixture<AddPrivilegeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPrivilegeDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPrivilegeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

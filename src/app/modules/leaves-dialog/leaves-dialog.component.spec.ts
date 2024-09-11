import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavesDialogComponent } from './leaves-dialog.component';

describe('LeavesDialogComponent', () => {
  let component: LeavesDialogComponent;
  let fixture: ComponentFixture<LeavesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeavesDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeavesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

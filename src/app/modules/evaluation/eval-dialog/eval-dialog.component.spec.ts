import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvalDialogComponent } from './eval-dialog.component';

describe('EvalDialogComponent', () => {
  let component: EvalDialogComponent;
  let fixture: ComponentFixture<EvalDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvalDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvalDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

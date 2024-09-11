import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDocsDialogComponent } from './add-docs-dialog.component';

describe('AddDocsDialogComponent', () => {
  let component: AddDocsDialogComponent;
  let fixture: ComponentFixture<AddDocsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDocsDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDocsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

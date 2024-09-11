import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSupportPopupComponent } from './add-support-popup.component';

describe('AddSupportPopupComponent', () => {
  let component: AddSupportPopupComponent;
  let fixture: ComponentFixture<AddSupportPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSupportPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSupportPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

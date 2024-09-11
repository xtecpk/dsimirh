import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDepartureComponent } from './add-departure.component';

describe('AddDepartureComponent', () => {
  let component: AddDepartureComponent;
  let fixture: ComponentFixture<AddDepartureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDepartureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDepartureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualComponent } from './annual.component';

describe('AnnualComponent', () => {
  let component: AnnualComponent;
  let fixture: ComponentFixture<AnnualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnualComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
